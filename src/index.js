import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SRoutes from './SRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <SRoutes>
        <App/>
      </SRoutes>
  </React.StrictMode>
);

