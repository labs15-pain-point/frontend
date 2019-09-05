import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

// Importing Views
import LandingView from './views/LandingView'
import HowItWorksView from './views/HowItWorksView'

function App(props) {
  return (
    <div className="App">
      <Route exact path ="/" component={LandingView}/>
      <Route path = "/howitworks" component={HowItWorksView}/>
    </div>
  );
}

export default App;
