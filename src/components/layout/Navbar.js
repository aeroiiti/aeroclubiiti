import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className='wrapper container'>
        <nav className='navbar bg-white bg-opacity-17'>
          <ul className='flex'>
            <li className='link active w-32'>
              <Link to='/'>HOME</Link>
            </li>
            <li className='link unactive w-32'>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li className='link unactive w-32'>
              <Link to='/register'>REGISTER</Link>
            </li>
            <li className='link unactive w-32'>
              <Link to='/login'>LOGIN</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
