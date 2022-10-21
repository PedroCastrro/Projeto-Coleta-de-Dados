import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/Global.css';

import { Card1 } from './assets/components/Card1';
import { Card2 } from './assets/components/Card2';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card1 />
    <Card2 />
  </React.StrictMode>
)
