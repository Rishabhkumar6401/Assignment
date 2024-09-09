import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@shopify/polaris/build/esm/styles.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Performance from './components/Performance';
import Discover from './components/Discover';

function App() {
  
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Welcome />
        <div className='bg-[#FFF7EE] w-[100%]'>
          <Performance />
        </div>
        <Discover />
      </BrowserRouter>
    </>
  );
}

export default App;
