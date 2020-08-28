import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = props => {
  const items = [];

  for (let number = 1; number <= props.totalPages; number++ ) {
    items.push(
      <BootstrapPagination.Item 
        key={number} 
        onClick={() => props.paginate(number)}
        active={props.activePage === number}
      >
        {number}
      </BootstrapPagination.Item>
    )
  }
  return (
    <BootstrapPagination size="sm" className="justify-content-center flex-wrap">
      {items}
    </BootstrapPagination>
  )
}

export default Pagination;