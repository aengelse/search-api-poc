import React from 'react';

import Facet from './Facet';
import ProductTypeFacet from './ProductTypeFacet';

const Facets = ({ facets }) => (
  <div className="facets">
    <form className="facets__form">
      {facets.filter(facet => facet.facetName === 'productTypeId').map(facet =>
        <ProductTypeFacet facet={facet} key={facet.facetName} />
      )}
      {facets.filter(facet => facet.facetName !== 'productTypeId').map(facet =>
        <Facet facet={facet} key={facet.facetName} />
      )}
    </form>
  </div>
);

export default Facets;
