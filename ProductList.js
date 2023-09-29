// src/components/ProductList.js
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
