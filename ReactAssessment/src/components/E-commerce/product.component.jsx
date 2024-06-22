import React from 'react'

const ProductComponent = ({product}) => {
  return (
    
   
    <div>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>

  );
};

export default ProductComponent