import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

const Header = props => {
  return(
    <header>
      <Navbar variant="dark" className="custom-nav-bg justify-content-between">
        <Navbar.Brand>
          <h1 className="title">Beer Shop</h1>
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/" active={!props.isFavouritesPage} className="link">Home</Nav.Link>
          <Nav.Link as={Link} to="/favourites" active={props.isFavouritesPage} className="link">Favourites</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header;