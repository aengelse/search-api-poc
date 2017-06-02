import React from 'react';

const FacetValue = ({ facet }) => (
  <fieldset className="facets__section">
    <legend className="facets__section-title">
      {facet.displayName}
    </legend>
    {facet.facetValues.map(facetValue => (
      <div className="facets__item" key={facetValue.reference}>
        <label className="facet" htmlFor="facetValue.slug">
          <input
            type="checkbox"
            name={facetValue.facetSlugType}
            id={facetValue.slug}
            value={facetValue.slug}
            className="facet__checkbox"
          />
          <span className="facet__label">
            {facetValue.displayValue}
          </span>
          <span className="facet__count">
            ({facetValue.count})
          </span>
        </label>
      </div>
      )
    )}
  </fieldset>
);

export default FacetValue;
