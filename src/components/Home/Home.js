import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Shared/Navbar/Navbar';
import TopMechanic from '../TopMechanic/TopMechanic';

const Home = () => {
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar />

            <div data-aos="fade-up" style={{maxHeight:'400px'}} className="container hero-container my-5">
                {/* <Hero /> */}
                <h1 style={{textAlign:'center', fontSize:'20px' ,fontWeight:'bold'}}>No.1 Cleaning Service
Platform of Bangladesh
Book professional cleaning and handyman services, on-demand!</h1>
            </div>

            <div data-aos="fade-up" className="container">
                <TopMechanic />
            </div>
            
        </section>
    );
};

export default Home;