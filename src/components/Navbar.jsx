
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const backgroundColor = '#0a1931'; // Deep navy
  const whiteText = '#ffffff';
  const brandGold = '#FFD700';

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor, color: whiteText, height: '80px' }}
    >
      <div className="container-fluid px-4">
        <Link
          to="/"
          className="navbar-brand fw-bold"
          style={{ color: brandGold, fontSize: '1.8rem', paddingRight: '30px', fontFamily: 'serif' }}
        >
          GRABSHOP
        </Link>
        <button
          className="navbar-toggler border-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: whiteText, fontSize: '1.1rem', padding: '0 15px' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: whiteText, fontSize: '1.1rem', padding: '0 15px' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" style={{ color: whiteText, fontSize: '1.1rem', padding: '0 15px' }}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" style={{ color: whiteText, fontSize: '1.1rem', padding: '0 15px' }}>
                🛒 Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: whiteText, fontSize: '1.1rem', padding: '0 15px' }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
