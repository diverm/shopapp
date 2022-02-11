import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductProvider} from './context/ProductContext';

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root')
);

