import React from 'react';
import Pagination from './Pagination';
import Card from './Card';


const Catalog = props => {

  return(
    <section className="catalog">
      {props.isFavouritesPage && <h2 className="text-center">Favourites</h2>}
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
  </section>
  )
}

export default Catalog;