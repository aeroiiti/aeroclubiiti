import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import MembersState from './context/members/MembersState';
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <MembersState>
      <Router>
        <div>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/login' component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </MembersState>
  );
};

export default App;
