import React from 'react';

  const Nav = () => {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <div className="logo">
          <a href="#" className="logo-link">
            <svg className="logo-icon" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 11.5L12 4l9 7.5" stroke="#1E90FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 21V12h14v9" stroke="#1E90FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="logo-text">Hemmump</span>
          </a>
        </div>
        <nav className="main-nav">
          <a href="#">Home</a>
          <a href="#buy">Buy</a>
          <a href="#sell">Sell</a>
          <a href="#rent">Rent</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="auth-area">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Nav;

