import React from 'react';
import { connect } from 'react-redux';

const Layout = ({ facets, filters, products }) => (
  <div className="container js-ecommerce-container">
    <div className="filtered-search">
      <div className="filtered-search__filters visible-from-medium">
        Facets: {facets.length} <br/>
        Filters: {filters.length}
      </div>
      <div className="filtered-search__results">
        Products: {products.length}
      </div>
    </div>
  </div>
);

export default connect(
  state => state
)(Layout);
