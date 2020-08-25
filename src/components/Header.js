import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header className="header">
      <div className="header__container">
        <h1 className="title">Beer shop</h1>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><Link className="link" to="/">Home</Link></li> 
            <li className="nav__item"><Link  className="link" to='/favourites'>Favourites</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;