import React from 'react';

import Facet from './Facet';

const Facets = ({ facets }) => (
  <div className="facets">
    <form className="facets__form">
      {facets.map(facet => <Facet facet={facet} key={facet.facetName} />)}
    </form>
  </div>
);

export default Facets;
