import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/Global.css';

import { Card1 } from './assets/components/Card1';
import { Card2 } from './assets/components/Card2';
import { Home } from './Pages/Home';
import { Background } from './assets/components/Background';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card1 />
    <Card2 />
    <Home />
    <Background />
  </React.StrictMode>
)
