import React, { useState } from "react";
import './SellingComponent.css';

const SellingComponent = () => {

  const [productID, setProductID] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productNameID, setProductName] = useState("");
  const [Products, setProducts] = useState([]);

  const handleProductID = (event) => {
    setProductID(event.target.value);
  }

  const handleSellingPrice = (event) => {
    setSellingPrice(event.target.value);
  }

  const handleProductName = (event) => {
    setProductName(event.target.value);
  }

  const handleAddProduct = () => {
    if (productID && sellingPrice && productNameID) {
      const newProduct = {
        id: productID,
        price: sellingPrice,
        name: productNameID
      }
      setProducts([...Products, newProduct]);

      setProductID("");
      setSellingPrice("");
      setProductName("");
    }
  }

  const renderProducts = () => {
    const productElements = [];
  
    for (let i = 0; i < Products.length; i++) {
      const product = Products[i];
      productElements.push(
        <div key={i}>
          <p> Product ID: {product.id} Selling Price: {product.price} Product Name: {product.name} </p>
        </div>
      );
    }
  
    return productElements;
  };
  

  return (
    <div className="selling-component">
      <label htmlFor="productid">Product ID:</label>
      <input type="text" id="productid" value={productID} onChange={handleProductID} />

      <label htmlFor="sellingPrice">Selling Price:</label>
      <input type="text" id="sellingPrice" value={sellingPrice} onChange={handleSellingPrice} />

      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" value={productNameID} onChange={handleProductName} />

      <button className="styled-button" onClick={handleAddProduct}>Add Product</button>
      

      <label htmlFor="renderedproducts" className="styled-button">PRODUCTS</label>

      {renderProducts()}
    </div>
  );
};

export default SellingComponent;
