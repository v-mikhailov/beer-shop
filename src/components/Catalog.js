import React from 'react';
import Pagination from './Pagination';
import Card from './Card';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';


const Catalog = props => {
  
  return(
    <section className="catalog">
      {props.isFavouritesPage && <h2 className="text-center">Favourites</h2>}
      {props.error ? (
          <div className="d-flex justify-content-center">
            <Badge variant="light">Ошибка</Badge>
          </div>
        ) : 
      props.loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
        <React.Fragment>
          <div className="flex-container">
            <Card 
              list={props.list}
              onFavClick={props.onFavClick}
              favBeers={props.favBeers}
            />
          </div> 
          <Pagination 
            totalPages={props.totalPages} 
            paginate={props.paginate} 
            activePage={props.activePage}  
          />
        </React.Fragment>
      )}
  </section>
  )
}

export default Catalog;