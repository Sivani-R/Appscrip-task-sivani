import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter(product => product.category === category);
        setProducts(filteredData);
      });
  }, [category]);

  return (
    <div>
      <Header />
      <div className="container">
        <h1>{category} Products</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
}
