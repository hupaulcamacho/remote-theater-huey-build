import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

// Component imports
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/' component={LandingPage} />
      </Switch>
    </div>
  );
}