import React from 'react';
import { connect } from 'react-redux';

import Facets from './Facets';

const Layout = ({ facets, pagination }) => (
  <div className="container">
    <div className="filtered-search">
      <div className="filtered-search__filters visible-from-medium">
        <Facets facets={facets} />    
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
