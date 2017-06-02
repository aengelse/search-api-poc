import React from 'react';

const FacetValue = ({ facetValue, isProductTypeFacet }) => (
  <div className="facets__item">
    <label className="facet" htmlFor="facetValue.slug">
      <input
        type={isProductTypeFacet ? 'radio' : 'checkbox'}
        name={facetValue.facetSlugType}
        id={facetValue.slug}
        value={isProductTypeFacet ? '' : facetValue.slug}
        className={isProductTypeFacet ? 'facet__radio' : 'facet__checkbox'}
      />
      <span className="facet__label">
        <span className="facet__value">
          {facetValue.displayValue}
        </span>
        {facetValue.count &&
          <span className="facet__count">
            ({facetValue.count})
          </span>
        }
      </span>
    </label>
  </div>
);

export default FacetValue;
