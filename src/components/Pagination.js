import React from 'react';

const Pagination = props => {
  const pageNumber = []
  
  for (let i = 1; i <= props.totalPages; i++ ){
    pageNumber.push(i);
  }

  return(
    <ul className="nav__list">
    {
      pageNumber.map(number => {
        return(
          <li key={number} className="nav__item">
            <a 
              className="link__pagination" 
              href="!"
              onClick={event => {
                  event.preventDefault();
                  props.paginate(number);
                } 
              }
              >
              {number}
            </a>
          </li>
        )
      })
    }
    </ul>
  )
}

export default Pagination;