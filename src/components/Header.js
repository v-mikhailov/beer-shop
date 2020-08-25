import React from 'react';

const Header = () => {
  return(
    <header className="header">
      <div className="header__container">
        <h1 className="title">Beer shop</h1>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item"><a className="link" href="/">Home</a></li> 
            <li className="nav__item"><a className="link" href="/favourites">Favourites</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;