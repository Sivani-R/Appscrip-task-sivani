import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Footer from "../components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20') 
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <h1>Discover Our Products</h1>
          <ProductList products={products} />
        </main>
      </div>
      <Footer/>
    </div>
  );
}
