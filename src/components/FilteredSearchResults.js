import React from 'react';

import FilteredSearchSorting from './FilteredSearchSorting';
import ProductGrid from './ProductGrid';

const FilteredSearchResults = ({ products, pagination }) => (
  <div className="filtered-search__results">
    <div className="filtered-search__result-info">
      <span className="filtered-search__result-count js-result-count">
        <strong className="filtered-search__result-count-number">{pagination.totalResults} </strong>
        {pagination.totalResults === 1 ? 'resultaat' : 'resultaten'}
      </span>
      <span className="filtered-search__refinement-buttons">
        <button className="filtered-search__refinement-button js-filter-button">
          <svg><use xlinkHref="#icon-filter" /></svg> Filter
        </button>
        <button className="filtered-search__refinement-button filtered-search__refinement-button--sorting js-sorting-button">
          <svg><use xlinkHref="#icon-sort" /></svg> Sorteer
        </button>
      </span>
      <FilteredSearchSorting />
    </div>
    <ProductGrid products={products} />
  </div>
);

export default FilteredSearchResults;
