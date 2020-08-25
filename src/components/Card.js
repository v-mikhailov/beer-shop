import React from 'react';
import Svg from './Svg';

const Card = props => {

  return(
    props.list.map(beer => 
      <div className="card" key={beer.id}>  
      <div className="card__svg-container">
      <Svg 
        onFavClick={props.onFavClick}
        beerData={beer}
        favList={props.favBeers}
      />
      </div>
        <div className="card__img-container">
          <img className="card__img" src={beer.image_url} alt="#" />
        </div>
        <div className="card__text-block">
          <h2 className="card__title">{beer.name}</h2>
          <p className="card__text">{beer.description}</p>
          <ul className="card__info-list">
            <li className="card__info">abv: {beer.abv}</li>
            <li className="card__info">ibu: {beer.ibu}</li>
            <li className="card__info">ebc: {beer.ebc}</li>
          </ul>
        </div>
      </div>
    )
  )
}

export default Card;