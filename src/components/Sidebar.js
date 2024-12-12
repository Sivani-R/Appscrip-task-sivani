import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside>
      <h2>Filter by Category</h2>
      <ul>
        <li>
          <Link to="/category/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link to="/category/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/category/men's clothing">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/category/women's clothing">Women's Clothing</Link>
        </li>
      </ul>
    </aside>
  );
}
