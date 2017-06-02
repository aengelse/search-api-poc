import React from 'react';

import Product from './Product';

const ProductGrid = ({ products }) => (
  <div className="js-results">
    <div className="product-grid js-products">
      <div className="product-grid__products card-container">
        {products.map(product => (
          <div key={product.productId} className="product-grid__item card">
            <Product product={product} />
          </div>
        ))}
      </div>

      <div className="product-grid__loader-overlay">
        <div className="product-grid__loader">
          <div className="loader" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductGrid;
