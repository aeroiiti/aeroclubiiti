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
import MemberModal from './components/modal/MemberModal';
import MembersState from './context/members/MembersState';

import './App.css';
import PostState from './context/posts/PostState';
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <MembersState>
      <PostState>
        <Router>
          <div className='opacity-75'>
            <Header />
            <Navbar />
            <MemberModal />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/login' component={Login} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </PostState>
    </MembersState>
  );
};

export default App;
