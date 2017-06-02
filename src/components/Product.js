import React from 'react';

const Product = ({ product }) => (
  <div className="product">
    <div className="product__content">
      <div className="product__display">
        <a href="">
          <figure className="product__image-box">
            <img
              src={`https://image.coolblue.io/products/${product.primaryImageId}?width=500&height=500`}
              className="product__image"
              alt={product.fullName}
            />
          </figure>
        </a>
      </div>
      <div className="product__details">
        {product.fullName}
      </div>
    </div>
  </div>
);

export default Product;
