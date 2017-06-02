import React from 'react';

const Facet = ({ facet, isProductTypeFacet }) => (
  <fieldset className="facets__section">
    <legend className="facets__section-title">
      {isProductTypeFacet ? 'Toon resultaten voor' : facet.displayName}
    </legend>
    {facet.facetValues.map(facetValue => (
      <div className="facets__item" key={facetValue.reference}>
        <label className="facet" htmlFor="facetValue.slug">
          <input
            type={isProductTypeFacet ? 'radio' : 'checkbox'}
            name={facetValue.facetSlugType}
            id={facetValue.slug}
            value={facetValue.slug}
            className={isProductTypeFacet ? 'facet__radio' : 'facet__checkbox'}
          />
          <span className="facet__label">
            <span className="facet__value">
              {facetValue.displayValue}
            </span>
            <span className="facet__count">
              ({facetValue.count})
            </span>
          </span>
        </label>
      </div>
      )
    )}
  </fieldset>
);

export default Facet;
