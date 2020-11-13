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
      <section className='main wrapper container pb-20'>
        <h1 className='flex justify-center'>Tinkering</h1>
        <p className='flex justify-center text-xl'>like a star</p>
        <div className='container mt-8'>
          <div className='carousel carousel-slider'>
            <a
              className='carousel-item '
              href='#one!'
              style={{
                width: '50%',
              }}
            >
              <img src={galaxy} alt='Not found'></img>
            </a>
            <a className='carousel-item' href='#two!'>
              <img
                src={galaxy}
                alt='Not found'
                style={{
                  width: '50%',
                }}
              ></img>
            </a>
            <a className='carousel-item' href='#three!'>
              <img
                src={galaxy}
                alt='Not found '
                style={{
                  width: '50%',
                }}
              ></img>
            </a>
            <a className='carousel-item' href='#four!'>
              <img
                src={galaxy}
                alt='Not found'
                style={{
                  width: '50%',
                }}
              ></img>
            </a>
            <a className='carousel-item' href='#five!'>
              <img
                src={galaxy}
                alt='Not found'
                style={{
                  width: '50%',
                }}
              ></img>
            </a>
          </div>

          <PostList />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
