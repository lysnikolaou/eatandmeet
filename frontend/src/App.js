import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import  PrivateRoute from './components/PrivateRoute';
import HomePage from './features/HomePage';
import LoginPage from './features/LoginPage';
import LandingPage from './features/LandingPage';


function App() {
  return (
      <div className={App}>
          <Router>
                  <PrivateRoute exact path="/" component={HomePage} />
                  <Route path="/welcome" component={LandingPage} />
          </Router>
      </div>
  );
}

export default App;
