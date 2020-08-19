import React, { Fragment } from 'react';
import data from '../../assets/images/data.jpg';

const Home = () => {
    return (
        <Fragment>
            <section className='main wrapper container'>
                <h1 className='flex justify-center'>Lorem</h1>
                <p className='flex justify-center text-xl'>ipsum</p>
                <div className='flex justify-center mt-12'>
                    <img src={data} width='75%' height='40%' alt='Not found'></img>
                </div>
                <article className='flex flex-col justify-center'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                        quisquam rerum perspiciatis! Eaque doloremque quibusdam blanditiis
                        atque veniam asperiores suscipit voluptate quod officia ipsum? Velit
                        nemo maxime voluptates? Aperiam, nostrum.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                        quisquam rerum perspiciatis! Eaque doloremque quibusdam blanditiis
                        atque veniam asperiores suscipit voluptate quod officia ipsum? Velit
                        nemo maxime voluptates? Aperiam, nostrum.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                        quisquam rerum perspiciatis! Eaque doloremque quibusdam blanditiis
                        atque veniam asperiores suscipit voluptate quod officia ipsum? Velit
                        nemo maxime voluptates? Aperiam, nostrum.
                    </p>
                </article>
            </section>
        </Fragment>
    )
}

export default Home
