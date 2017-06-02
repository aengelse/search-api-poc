import React from 'react';
import { connect } from 'react-redux';

import Facets from './Facets';
import FilteredSearchResults from './FilteredSearchResults';

const Layout = ({ facets, products, pagination }) => (
  <div className="container">
    <div className="filtered-search">
      <div className="filtered-search__filters visible-from-medium">
        <Facets facets={facets} />
      </div>
      <FilteredSearchResults
        products={products}
        pagination={pagination}
      />
    </div>
  </div>
);

export default connect(
  state => state
)(Layout);
