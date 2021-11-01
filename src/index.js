import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Imported from './Components/Imported';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Imported />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


