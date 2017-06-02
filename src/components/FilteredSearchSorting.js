import React from 'react';

const sortOptions = [
  { value: 'relevantie', displayName: 'Relevantie' },
  { value: 'laagste-prijs', displayName: 'Prijs laag - hoog' },
  { value: 'hoogste-prijs', displayName: 'Prijs hoog - laag' },
  { value: 'best-verkocht', displayName: 'Best verkocht' }
];

const FilteredSearchSorting = () => (
  <span className="filtered-search__sorting">
    <form className="sorting js-sorting">
      <label className="sorting__option-selector-label" htmlFor="sorting">
        <select id="sorting" className="sorting__option-selector js-select-sort-option js-select-tracking">
          {sortOptions.map(option =>
            <option key={option.value} value="{option.value}">{option.displayName}</option>
          )}
        </select>
      </label>
      {sortOptions.map(option => (
        <label key={`sort-mobile-${option.value}`} className="sorting__option" htmlFor={`sort-${option.value}`}>
          <input
            className="sorting__option-radio js-sort-option"
            type="radio"
            name="sortOption"
            id={`sort-${option.value}`}
            data-sort-option={option.value}
          />{option.displayName}
        </label>
      ))}
    </form>
  </span>
);

export default FilteredSearchSorting;
