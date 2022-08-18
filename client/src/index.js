import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {Camiones}  from './components/Camiones';
import { Users } from './components/Users';
import { Viaje } from './components/Viaje';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Camiones />
    <Viaje />
    <Users />
  </React.StrictMode>
);


reportWebVitals();
