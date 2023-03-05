import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './component/Game';
import { HashRouter as Router, Route } from "react-router-dom";
import "./css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router>
        <Route path='/' exact component={Game}/>
  </Router>);