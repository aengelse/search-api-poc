import React from 'react';

import FacetValue from './FacetValue';

const Facet = ({ facet }) => (
  <fieldset className="facets__section">
    <legend className="facets__section-title">
      {facet.displayName}
    </legend>
    {facet.facetValues.map(facetValue => (
      <FacetValue facetValue={facetValue} key={facetValue.reference} />
    ))}
  </fieldset>
);

export default Facet;
