import React from 'react';
import { AboutUs, FindUs, Footer, Gallery, Header, Intro, Laurels, Significantwork } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Significantwork />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
