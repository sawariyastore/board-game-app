import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './component/Game';
import { HashRouter as Router } from "react-router-dom";
import "./css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router>
    <Game />
  </Router>);