import React from 'react';

const Search = props => {

  return(
    <section className="search-section">
      <form className="form" id="search-form" onSubmit={props.onSubmit}>
        <input 
          type="text"
          className="form__input" 
          placeholder="Search for beer"
          value={props.value}
          onChange={props.onChange}
          >
          </input>
        <button className="form__button" form="search-form">Search</button>
      </form>
    </section>
  )
}


export default Search;