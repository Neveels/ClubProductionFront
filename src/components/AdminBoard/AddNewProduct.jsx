import React, { useState } from "react";
import cl from "./AdminBoard.module.css";
import ProductService from "../../service/product.service";
const AddNewProduct = () => {
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const addProductToShop = (e) => {
    e.preventDefault();

    const newProduct = {
      price: price,
      quantity: quantity,
      title: title,
      url: url,
    };

    ProductService.addProduct(newProduct);
  };
  return (
    <div>
      <h2>Add Product to Shop</h2>
      <form onSubmit={addProductToShop}>
        <div className={cl.field}>
          <h3>Name of product</h3>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={cl.field}>
          {" "}
          <h3>Price</h3>
          <input
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className={cl.field}>
          <h3>Image</h3>
          <input
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className={cl.field}>
          <h3>quantity</h3>
          <input
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit">
          <p>Add</p>
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
