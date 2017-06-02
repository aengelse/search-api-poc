import React from 'react';
import { connect } from 'react-redux';

const Layout = ({ facets, filters, pagination }) => (
  <div className="container js-ecommerce-container">
    <div className="filtered-search">
      <div className="filtered-search__filters visible-from-medium">
        Facets: {facets.length} <br />
        Filters: {filters.length}
      </div>
      <div className="filtered-search__results">
        Total results: {pagination.totalResults}
      </div>
    </div>
  </div>
);

export default connect(
  state => state
)(Layout);
