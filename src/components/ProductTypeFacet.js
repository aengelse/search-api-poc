import React from 'react';

import FacetValue from './FacetValue';

const allProductTypesFacetValue = {
  reference: 'all-product-types',
  facetSlugType: 'producttype',
  slug: 'all-product-types',
  displayValue: 'Alle categorieën'
};

const Facet = ({ facet }) => (
  <fieldset className="facets__section">
    <legend className="facets__section-title">
      Toon resultaten voor
    </legend>
    <FacetValue facetValue={allProductTypesFacetValue} isProductTypeFacet={true} />
    {facet.facetValues.map(facetValue => (
      <FacetValue facetValue={facetValue} isProductTypeFacet={true} key={facetValue.reference} />
    ))}
  </fieldset>
);

export default Facet;
