import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/Global.css';

import { Home } from './assets/components/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
