import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

// Importing Views
import LandingView from './views/LandingView'
import HowItWorksView from './views/HowItWorksView'
import AboutUs from './views/AboutUs'

function App(props) {
  return (
    <div className="App">
      <Route exact path ="/" component={LandingView}/>
      <Route path = "/howitworks" component={HowItWorksView}/>
      <Route path='/about' component={AboutUs}/>
    </div>
  );
}

export default App;
