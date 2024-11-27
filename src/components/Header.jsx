import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user }) {
  return (
    <header className='header'>
      <h1>Liza Creation</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        {/* Display username if logged in, otherwise show Login/Sign up */}
        {user ? (
          <span>Welcome, {user}</span>
        ) : (
          <Link to="/auth">Login/Sign up</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
