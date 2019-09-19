import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

// Importing Views
import LandingView from './views/LandingView'
import HowItWorksView from './views/HowItWorksView'
import AboutUs from './views/AboutUs'
import LeaderboardView from './views/LeaderboardView'
import AllCompanyView from './views/AllCompanyView'
import Header from './components/Header'

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route exact path ="/" component={LandingView}/>
      <Route path = "/howitworks" component={HowItWorksView}/>
      <Route path='/about' component={AboutUs}/>
      <Route path ='/leaderboard' component={LeaderboardView}/>
      <Route path ='/all' component={AllCompanyView}/>
    </div>
  );
}

export default App;
