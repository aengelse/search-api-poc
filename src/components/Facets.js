import React from 'react';

import Facet from './Facet';

const Facets = ({ facets }) => (
  <div className="facets">
    <form className="facets__form">
      {facets.filter(facet => facet.facetName === 'productTypeId').map(facet =>
        <Facet facet={facet} key={facet.facetName} isProductTypeFacet={true} />
      )}
      {facets.filter(facet => facet.facetName !== 'productTypeId').map(facet =>
        <Facet facet={facet} key={facet.facetName} />
      )}
    </form>
  </div>
);

export default Facets;
