import React, { Fragment, useEffect } from 'react';
import galaxy from '../../assets/images/galaxy.jpg';
import PostList from '../post/PostList';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Home = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <section className='main wrapper container'>
        <h1 className='flex justify-center'>Lorem</h1>
        <p className='flex justify-center text-xl'>ipsum</p>

        <div className='carousel'>
          <a className='carousel-item ' href='#one!'>
            <img src={galaxy} alt='Not found'></img>
          </a>
          <a className='carousel-item' href='#two!'>
            <img src={galaxy} alt='Not found'></img>
          </a>
          <a className='carousel-item' href='#three!'>
            <img src={galaxy} alt='Not found'></img>
          </a>
          <a className='carousel-item' href='#four!'>
            <img src={galaxy} alt='Not found'></img>
          </a>
          <a className='carousel-item' href='#five!'>
            <img src={galaxy} alt='Not found'></img>
          </a>
        </div>

        <PostList />
      </section>
    </Fragment>
  );
};

export default Home;
