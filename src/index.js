import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/index.css';
import App from 'app/components/App/index.js';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
