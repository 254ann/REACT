// src/components/ProductProperties.jsx
import React from 'react';
import ProductCard from './productCard.component';

const ProductProperties = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.productID} product={product} />
      ))}
    </div>
  );
};

export default ProductProperties;
