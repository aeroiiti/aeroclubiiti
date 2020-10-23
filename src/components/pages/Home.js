import React, { Fragment } from "react";
import data from "../../assets/images/data.jpg";
import PostList from "../post/PostList";

const Home = () => {
  return (
    <Fragment>
      <section className='main wrapper container'>
        <h1 className='flex justify-center'>Lorem</h1>
        <p className='flex justify-center text-xl'>ipsum</p>
        <div className='flex justify-center mt-12'>
          <img src={data} width='75%' height='40%' alt='Not found'></img>
        </div>
        <PostList />
      </section>
    </Fragment>
  );
};

export default Home;
