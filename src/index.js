import React from 'react';
import ReactDOM from 'react-dom';

import './css/base.critical.css';
import './css/search.critical.css';
import './css/base.css';
import './css/search.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
