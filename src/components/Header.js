import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/category/jewelery">Jewelery</Link>
        <Link to="/category/electronics">Electronics</Link>
        <Link to="/category/men-clothing">Men's Clothing</Link>
        <Link to="/category/women-clothing">Women's Clothing</Link>
      </nav>
    </header>
  );
}
