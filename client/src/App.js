import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

// Importing Views
import LandingView from './views/LandingView'
import AboutUs from './views/AboutUs'

function App(props) {
  return (
    <div className="App">
      <Route exact path ="/" component={LandingView}/>
      <Route path='/about' component={AboutUs}/>
    </div>
  );
}

export default App;
