import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Search from './components/Search';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';
const API_SEARCH_BEER = '?beer_name=';
const API_PAGINATE = '?page=';
const API_PER_PAGE = 'per_page=24';

const App = () => {
  const [catalog, setCatalog] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const [inputValue, setInputValue] = React.useState('');
  const [url, setUrl] = React.useState(`${API_ENDPOINT}?${API_PER_PAGE}`);
  const [totalPages, setTotalPages] = React.useState(13);
  const [activePage, setActivePage] = React.useState(1);
  const [favBeerList, setFavBeerList] = React.useState([]);

  const handleFetchCatalog = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const catalog = await response.json();
      setCatalog(catalog);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
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
    setActivePage(pageNumber);
    setUrl(`${API_ENDPOINT}${API_PAGINATE}${pageNumber}&${API_PER_PAGE}`)
  }
 
  React.useEffect(() => {
    handleFetchCatalog();
  }, [handleFetchCatalog]);

  return (
    <div className="page-container">
      <Switch>
        <Route exact path="/">
        <Header isFavouritesPage={false}/>
          <Search 
            onSubmit={handleInputSubmit} 
            value={inputValue}
            onChange={handleInputChange}
          />
          <Catalog 
            list = {catalog} 
            totalPages={totalPages}
            activePage={activePage}
            favBeers={favBeerList}
            loading={isLoading}
            error={isError}
            isFavouritesPage={false}
            paginate={paginate}
            onFavClick={handleFavClick}
          />
        </Route>
        <Route path="/favourites">
        <Header isFavouritesPage={true}/>
          <Catalog 
            list={favBeerList}
            favBeers={favBeerList}
            onFavClick={handleFavClick}
            isFavouritesPage={true}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
