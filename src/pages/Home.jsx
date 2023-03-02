import React from 'react';
import Header from "../compnents/Header";
import About from '../compnents/About';
import Services from '../compnents/Services';
import Store from '../compnents/Store';
import Events from '../compnents/Events';
import Courses from '../compnents/Courses';
import Sub from '../compnents/Sub';
import Blog from '../compnents/Blog';
import Contact from '../compnents/Contact';

const Home = () => {
  return (
   <>
    <Header />
    <About />
    <Services />
    <Store />
    <Events />
    <Courses />
    <Sub />
    <Blog />
    <Contact />

   </>
  )
}

export default Home
