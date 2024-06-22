// src/components/ProductCard.jsx
import React, { useState } from 'react';
import { jordan_black, jordan_red, jordan_orange } from "../../assets/index"

const imageMap = {
  Red: jordan_red,
  Black: jordan_black,
  Orange: jordan_orange,
};

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('Red');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-card" style={{ backgroundColor: selectedColor.toLowerCase() }}>
      <img src={imageMap[selectedColor]} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <div className="color-buttons">
        {product.availableColors.map(color => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            style={{ backgroundColor: color.toLowerCase() }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
