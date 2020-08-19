import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer wrapper container'>
        <section className='flex items-center hr border-b-2 px-12'>
          <h3 className='opacity-75 text-black font-bold text-sm'>ADDRESS</h3>
          <p className='text-gray-600 px-6'>
            IIT Indore, Simrol, Madhya Pradesh, India
          </p>
        </section>
        <section className='flex items-center hr border-b-2 px-12'>
          <h3 className='opacity-75 text-black font-bold text-sm'>PHONE</h3>
          <p className='text-gray-600 px-6'>+91-8685848982</p>
        </section>
        <section className='flex items-center px-12'>
          <h3 className='opacity-75 text-black font-bold text-sm'>EMAIL</h3>
          <p className='text-gray-600 px-6'>aeroclub@iiti.ac.in</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
