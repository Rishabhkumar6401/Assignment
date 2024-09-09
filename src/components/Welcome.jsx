import React from 'react'
import { Button, Card, TextField, Page, Layout, Text, Badge, Icon } from '@shopify/polaris';
import { AlertTriangleIcon, AlertCircleIcon } from '@shopify/polaris-icons';


const Welcome = () => {
  return (
    <div className="md:pl-16 sm:pl-1">
      <div className="p-6">
        <p className="text-2xl font-bold mt-[22px] mb-[22px] " 
        >
          Welcome, John Mathew!!
        </p>


        <div className="xs:flex-col gap-12 md:flex">
          {/* Order Sync Card */}
          <div className="shadow-md bg-white border border-gray-300 rounded-lg p-4 h-[168px] w-[352px]">
            <h2 className="text-[14px] font-bold mb-2">Order Sync Successful!</h2>
            <p className="mb-4 text-gray-600">
              Your order details from the last 30 days have been successfully synced. Check them out now!
            </p>
            <div className='mt-8'>
              <Button variant="primary" >
                Explore Your Orders
              </Button>
            </div>
          </div>

          {/* Customize Notifications Card */}
          <div className="shadow-md bg-[#FFF8DB] border border-gray-300 rounded-lg p-4 h-[168px] w-[352px]">
            <h2 className="text-[14px] font-bold mb-2 flex gap-1"><AlertTriangleIcon style={{ width: '15px' }} />Customize Customer Notification</h2>
            <p className="mb-4 text-gray-600">
              YTailor Your Email Experience: Set the Sender Email and Choose Notification Triggers
            </p>
            <div className='mt-8'>
              <Button variant="primary"  >
                Configure Notifications
              </Button>
            </div>
          </div>

          {/* Tracking Link Card */}
          <div className="shadow-md bg-[#EAF4FF] border border-gray-300 rounded-lg p-4 h-[168px] w-[352px]">
            <h2 className="text-[14px] font-bold mb-2 flex gap-1"><AlertCircleIcon style={{ width: '15px' }} />Your Tracking Link has been generated</h2>
            <p className="mb-4 text-gray-600">
              Include the <a href="#" className='text-blue-600 underline'>Link</a> to Your Store's Navigation <br />Menu.
            </p>
            <div className='mt-8 flex gap-2'>
              <Button>Cancel Link</Button>

              <Button variant="primary" >
                Go To Navigation Menu
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Welcome
