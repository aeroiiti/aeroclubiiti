import React, { Fragment } from 'react';
import Members from '../member/Members';
const About = () => {
  return (
    <div className='flexbox  container bg-white wrapper'>
      <div className='pt-8 flex justify-center text-xl  '>
        Official Website of The Aeromodelling Club
      </div>
      <div className='text-6xl text-center font-bold pt-24'>Members</div>
      <div className='pt-10 pb-40 mx-16'>
        <div className=' border-4 border-black rounded-lg shadow-2xl'>
          <div className='m-1 pt-10 pb-40  border-2 border-black rounded-lg shadow-2xl'>
            <Members />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
