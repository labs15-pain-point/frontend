import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

// Importing Views
import LandingView from './views/LandingView'

function App(props) {
  return (
    <div className="App">
      <Route exact path ="/" component={LandingView}/>
    </div>
  );
}

export default App;
