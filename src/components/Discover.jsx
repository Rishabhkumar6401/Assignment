import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@shopify/polaris';
import { Box, Grid } from '@mui/material';
import PayPalIcon from '@mui/icons-material/Payment';
import StarIcon from '@mui/icons-material/Star';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const CustomSection = () => {
  return (
    <Box p={4} bgcolor="#FAF7F4">
      <div className=''>
        <h1 className='text-2xl font-semibold mb-4'>
          Discover the Heart of Our Functionality
        </h1>
        <Grid container spacing={3}>

          {/* First Section */}
          <Grid item xs={12} md={4}>
            <Box className="shadow-md" bgcolor="white" p={3} borderRadius="12px">
              <h3 style={{ fontWeight: 700, marginBottom: '14px' }}>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h3>
              <p className='mb-4'>Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>

              {/* Color Input Fields */}
              <div className="flex justify-between">
                <TextField
                  fullWidth
                  label="Accent Color"
                  variant="outlined"
                  defaultValue="FF9898"

                  margin="dense"
                />
                <div className='bg-[#FF9898] border-r-4 w-16 h-8 mt-4 ml-4' style={{ borderRadius: '12px' }}></div>
              </div>
              <div className="flex justify-between">
                <TextField
                  fullWidth
                  label="Text Color"
                  variant="outlined"
                  defaultValue="571010"
                  //   InputProps={{
                  //     style: { backgroundColor: '#571010', borderRadius: '4px' },
                  //   }}
                  margin="dense"
                />
                <div className='bg-[#571010] border-r-4 w-16 h-8 mt-4 ml-4' style={{ borderRadius: '12px' }}></div>
              </div>
              <div className="flex justify-between">
                <TextField
                  fullWidth
                  label="Background Color"
                  variant="outlined"
                  defaultValue="FFEAFA"
                  //   InputProps={{
                  //     style: { backgroundColor: '#FFEAFA', borderRadius: '4px' },
                  //   }}
                  margin="dense"
                />
                <div className='bg-[#FFEAEA] border-r-4 w-16 h-8 mt-4 ml-4' style={{ borderRadius: '12px' }}></div>
              </div>

              {/* Buttons */}
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button >Preview</Button>
                <Button variant="primary">
                  Apply Colors
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Second Section */}
          <Grid item xs={12} md={4}>
            <Box className="shadow-md mb-8" bgcolor="white" p={2} borderRadius="12px">
              <h3 style={{ fontWeight: 700 }}>Exclusive Onboarding Support for High-Volume Brands</h3>
              <p className='mt-4 mb-4'>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>

              {/* Button */}
              <Button variant="primary" style={{ backgroundColor: '#555', color: '#FFF' }}>
                Schedule A Call
              </Button>
            </Box>
            <Box className="shadow-md" bgcolor="white" p={3} borderRadius="12px">

              <h3 style={{ fontWeight: 700, marginTop: '24px' }}>Explore Our Integrated Ecosystem</h3>
              <p className='mt-4 mb-4'>Discover a variety of popular integrations tailored for your convenience.</p>

              {/* Icons */}
              <div className='mb-4'>
                <Box display="flex" gap={2}>
                  <PayPalIcon style={{ fontSize: 36, color: '#003087' }} />
                  <StarIcon style={{ fontSize: 36, color: '#FFB100' }} />
                  <FlashOnIcon style={{ fontSize: 36, color: '#FF4500' }} />
                </Box>
              </div>

              <Button variant="primary" style={{ marginTop: '12px', backgroundColor: '#FFEB3B', color: '#000' }}>
                Explore Integrations
              </Button>
            </Box>
          </Grid>

          {/* Third Section */}
          <Grid item xs={12} md={4}>
            <Box className="shadow-md" bgcolor="white" p={3} borderRadius="12px">
              <h3 style={{ fontWeight: 700 }}>Seamlessly Integrate Custom HTML Elements</h3>
              <p className='mb-4 mt-4'>
                Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate
                the tracking page experience for your customers.
              </p>

              {/* HTML Link Input */}
              <TextField
                fullWidth
                label="HTML Link"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Value"
                margin="dense"
              />

              {/* Buttons */}
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button variant="primary" >Preview</Button>
                <Button variant="primary" style={{ backgroundColor: '#555', color: '#FFF' }}>
                  Apply changes
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default CustomSection;
