import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Button } from '@mui/material';
import { ViewIcon } from '@shopify/polaris-icons';

// Data for the pie chart
const data = [
  { name: 'Delivered', value: 40, color: '#E5AC64' },
  { name: 'Out for delivery', value: 20, color: '#FAE3C1' },
  { name: 'Intransit', value: 15, color: '#E5C471' },
  { name: 'Pending', value: 10, color: '#EED9C4' },
  { name: 'Exception', value: 5, color: '#7B612B' },
];

const Performance = () => {
  return (

    <div className="md:pl-16 sm:pl-1 p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Instant Dive into Your Performance Metrics
      </h1>
      <div className="flex space-x-4 mb-6">
        <Button
          variant="outlined"
          sx={{
            color: 'black',
            borderColor: 'purple',
            backgroundColor: '#f3e8ff',
            '&:hover': {
              backgroundColor: '#e6dbff',
            },
          }}
        >
          Lifetime
        </Button>

        <Button
          variant='contained'
          sx={{
            color: 'black',
            backgroundColor: '#fff',
            '&:hover': {
              backgroundColor: '#e6dbff',
            },
          }}
        >
          Last Week
        </Button>
        <Button
          variant='contained'
          sx={{
            color: 'black',
            backgroundColor: '#fff',
            '&:hover': {
              backgroundColor: '#e6dbff',
            },
          }}
        >
          Last Month
        </Button>
        <Button
          variant='contained'
          sx={{
            color: 'black',
            backgroundColor: '#fff',

            '&:hover': {
              backgroundColor: '#e6dbff',
            },
          }}
        >
          Last Year
        </Button>
        <Button
          variant='contained'
          sx={{
            color: 'black',
            backgroundColor: '#fff',
            '&:hover': {
              backgroundColor: '#e6dbff',
            },
            // Hides the button on mobile screens and shows it on screens md and up
            display: { xs: 'none', md: 'block' }
          }}
        >
          Customize Time Line
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[37%,20%,37%] gap-6">
        {/* Shipment Updates Card */}
        <div className="shadow-md bg-white border border-gray-300 rounded-lg p-4 font-bold">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold mb-2">Shipment Updates</h2>
            <p className="text-gray-600">Total Orders: 394</p>
          </div>
          <div className="mb-4">
            <div className="flex space-x-2">
              <Button variant="contained" size='small' sx={{
                color: 'black',
                backgroundColor: '#fff1e3',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
              }}>Delivered</Button>
              <Button variant="contained" size='small' sx={{
                color: 'black',
                backgroundColor: '#f1f1f1',
                '&:hover': {
                  backgroundColor: '#fff1e3',
                },
              }}>Out for delivery</Button>



              <Button variant="contained" size='small' sx={{
                color: 'black',
                backgroundColor: '#f1f1f1',
                '&:hover': {
                  backgroundColor: '#fff1e3',
                },
              }}>Intransit</Button>
              <Button variant="contained"
                size='small' sx={{

                  color: 'black',
                  backgroundColor: '#f1f1f1',
                  '&:hover': {
                    backgroundColor: '#fff1e3',
                  },
                }}>Pending</Button>

            </div>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={data} dataKey="value" innerRadius={40} outerRadius={60}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className='mt-8'>
            <div className="flex gap-4 mb-6">
              <div className='flex gap-2'>
                <div className="top-42 right-1 w-9 h-4 bg-[#5E4200] opacity-50 rounded-full "></div>
                <p>Exception</p>
              </div>
              <div className='flex gap-2'>
                <div className="top-42 right-1 w-9 h-4 bg-[#956F00] opacity-50 rounded-full "></div>
                <p>Intransit</p>
              </div>
              <div className='flex gap-2'>
                <div className="top-42 right-1 w-9 h-4 bg-[#E5A500] opacity-50 rounded-full "></div>
                <p>Pending</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className='flex gap-2'>
                <div className="top-42 right-1 w-9 h-4 bg-[#FFC879] opacity-50 rounded-full "></div>
                <p>Delivered</p>
              </div>
              <div className='flex gap-2'>
                <div className="top-42 right-1 w-9 h-4 bg-[#FFDDB6] opacity-50 rounded-full "></div>
                <p>Out for delivery</p>
              </div>

            </div>
          </div>

        </div>

        {/* Star Facts Card */}
        <div className="relative shadow-md bg-[#D4A756] text-white rounded-lg p-4">


          <h2 className="text-lg font-semibold mb-2">Star Facts about your orders!!!</h2>
          <p className="mb-8">
            There are 8 shipments that have been out for delivery for more than 3 days.
          </p>
          <p>
            There are 5 shipments in exception right now.
          </p>
          <br />
          {/* Grey Ellipse */}
          <div className="absolute top-42 right-1 w-10 h-10 bg-gray-300 opacity-50 rounded-full"></div>
          <p className='mb-4'>
            The maximum chargebacks are from Miami.
          </p>
          <Button variant="contained"
            size='small' sx={{


              color: 'black',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#fff1e3',
              },
            }}>
            Check Orders Page
          </Button>
        </div>


        {/* Tracking Page Views Vs Orders */}
        <div className="shadow-md bg-white border border-gray-300 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Tracking Page Views Vs Orders</h2>
          <p className="text-gray-600 mb-4">
            Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="bg-[#FFE9D3] sm:w-[245px] md:w-[453px] p-4 rounded-md text-center">
                <div className="flex justify-between" >
                  <div>
                    <p>Orders</p>
                    <p className="text-3xl font-semibold">80</p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <ViewIcon style={{ width: "33px" }} />

                  </div>
                </div>
              </div>
              <div className="bg-[#FFE9D3] xs:w-[245px] md:w-[453px] p-4 rounded-md text-center">
                <div className="flex justify-between" >
                  <div>
                    <p>Tracking Page Views</p>
                    <p className="text-3xl font-semibold">44</p>
                  </div>
                  <div className='flex justify-center items-center'>
                    <ViewIcon style={{ width: "33px" }} />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
