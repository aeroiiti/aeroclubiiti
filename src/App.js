import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
