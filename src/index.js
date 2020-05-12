import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';
import './index.css';

import {configureStore} from './store/index.js'

const store = configureStore();

console.log(store);

ReactDOM.render(<Root />, document.getElementById('root'));
