import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';

function composeDevMiddleware() {
  if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');

    return [
      createLogger({
        collapsed: () => true,
        timestamp: false,
        duration: true
      })
    ];
  }
  return [];
}

export default createStore(
  reducer,
  applyMiddleware(
    ...composeDevMiddleware()
  )
);
