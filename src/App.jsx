import { Button, Card, TextField, Text} from '@shopify/polaris';

import { useState } from 'react';

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import '@shopify/polaris/build/esm/styles.css';
import './index.css'; // Ensure you have an index.css for any custom styles
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Performance from './components/Performance';
import Discover from './components/Discover';

function App() {
  const [orderSynced, setOrderSynced] = useState(false);
  const [trackingLink, setTrackingLink] = useState('');

  const handleOrderSync = () => {
    setOrderSynced(true);
  };

  const handleTrackingLink = () => {
    setTrackingLink('https://mystore.com/tracking');
  };

  return (
    <>

<BrowserRouter>
    
      {/* Navbar */}
      <Navbar />
     

      {/* Welcome Section */}
      
      <Welcome/>
      <div className='bg-[#FFF7EE] w-[100%]'>


        <Performance />
      

      </div>

     
      

     

      <Discover />
     
    </BrowserRouter>
    </>
  );
}

export default App;
