import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Search from './components/Search';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

import './App.css';

const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';
const API_SEARCH_BEER = '?beer_name=';
const API_PAGINATE = '?page=';

const App = () => {
  const [catalog, setCatalog] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const [inputValue, setInputValue] = React.useState('');
  const [url, setUrl] = React.useState(`${API_ENDPOINT}`);
  const [totalPages, setTotalPages] = React.useState(13);
  const [favBeerList, setFavBeerList] = React.useState([]);

  const handleFetchCatalog = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const catalog = await response.json();
      setCatalog(catalog);
      setIsLoading(false);
    } catch {
      setIsError(true)
    }
  }, [url]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  }

  const handleInputSubmit = event => {
    event.preventDefault();
    inputValue ? setUrl(`${API_ENDPOINT}${API_SEARCH_BEER}${inputValue}`) : setUrl(`${API_ENDPOINT}`)
  }

  const handleFavClick = beer => {
    const clearedBeerList = [...favBeerList];
    clearedBeerList.find(savedBeer => savedBeer.id === beer.id) ? 
    clearedBeerList.splice(clearedBeerList.findIndex(savedBeer => savedBeer.id === beer.id), 1) : clearedBeerList.push(beer);
    setFavBeerList(clearedBeerList);
  }

  const paginate = (pageNumber) => {
    setUrl(`${API_ENDPOINT}${API_PAGINATE}${pageNumber}`)
  }
 
  React.useEffect(() => {
    handleFetchCatalog();
  }, [handleFetchCatalog]);

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <Search 
          onSubmit={handleInputSubmit} 
          value={inputValue}
          onChange={handleInputChange}
          />
          {isError && <p>Something went wrong...</p>}
          {isLoading ? (<p>Loading...</p>
          ) : (
            <Catalog 
              list = {catalog} 
              paginate={paginate}
              totalPages={totalPages}
              onFavClick={handleFavClick}
              favBeers={favBeerList}
              isFavouritesPage={false}
            />
          )}
        </Route>
        <Route path="/favourites">
          <Catalog 
            list={favBeerList}
            favBeers={favBeerList}
            onFavClick={handleFavClick}
            isFavouritesPage={true}
          />
        </Route>
      </Switch>
        <Footer />
    </React.Fragment>
  );
}

export default App;
