import React from 'react';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import SVG from './components/SVG';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <SVG />
      <Layout />
    </div>
  </Provider>
);

export default App;
