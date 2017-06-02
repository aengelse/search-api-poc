import React from 'react';
import { connect } from 'react-redux';

const Layout = ({ facets, filters, products }) => (
  <div>
    <div>Facets: {facets.length}</div>
    <div>Filters: {filters.length}</div>
    <div>Products: {products.length}</div>
  </div>
);

export default connect(
  state => state
)(Layout);
