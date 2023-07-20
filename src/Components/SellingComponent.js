import React from "react";
import './SellingComponent.css';

const SellingComponent = () => {
  return (
    <div className="selling-component">
      <label htmlFor="productid">Product ID:</label>
      <input type="text" id="productid" />

      <label htmlFor="sellingPrice">Selling Price:</label>
      <input type="text" id="sellingPrice" />

      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" />

      <button className="styled-button">Add button</button>
    </div>
  );
};

export default SellingComponent;
