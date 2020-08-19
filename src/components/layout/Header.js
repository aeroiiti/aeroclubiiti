import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header className='header container'>
        <h1 className='heading'>Aeromodelling Club</h1>
        <p className='flex justify-center'>
          A bunch of people learning to fly things around.
        </p>
        <div className='logo container border-white hover:text-tint-blue hover:border-tint-blue'>
          <Link to='/'>IIT Indore</Link>
        </div>
      </header>
    );
  }
}

export default Header;
