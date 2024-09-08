import React from 'react'
import {TextField, Icon } from '@shopify/polaris';
import { NavLink } from 'react-router-dom'
import {SearchIcon, CaretDownIcon, PersonIcon} from '@shopify/polaris-icons';
import '@shopify/polaris/build/esm/styles.css';

const Navbar = () => {
  return (
    <div>
         <header className="bg-white border-b border-gray-300 p-4 flex justify-between items-center shadow-sm h-['56px']">
        <nav className="flex gap-8 pl-16 
        ">
          <NavLink to='/' className="text-black font-medium ">
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-purple-700 hidden '/>
          </NavLink>
          <NavLink to='/order' className="text-black font-medium">
            <p>Order</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-purple-700 hidden '/>
          </NavLink>
          
          <div className='group relative'>
          <div to='/integration' className="text-black font-medium flex ">
            <p>Integrations</p>
            <CaretDownIcon  style={{width:'13px'}}/>
            {/* <hr className='w-2/4 border-none h-[1.5px] bg-purple-700 hidden '/> */}
          </div>
                    <div className='group-hover:block hidden absolute dropdown-menu r-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'> Hello-1</p>
                            <p className='cursor-pointer  hover:text-black'>Hello-2</p>
                            <p className='cursor-pointer  hover:text-black'>Hello-3</p>
                        </div>
                    </div>
                </div>
          <NavLink to='/partner' className="text-black font-medium">
            <p>Partner with us</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-purple-700 hidden '/>
          </NavLink>
        </nav>
        <div className="flex items-center space-x-4 pr-16">
        <TextField
        // value={searchValue}
        // onChange={handleSearchChange}
        placeholder="Search"
        prefix={<Icon source={SearchIcon} color="inkLightest" />} 
        inputClassName="border-none border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-0 px-8 py-1" 
      />
         
          <a href="#" className="text-black font-medium hover:text-purple-700 flex">
          <PersonIcon style={{width:'23px'}}/>
          
            Account
          </a>
          <a href="#" className="text-black font-medium hover:text-purple-700">
            Settings
          </a>
        </div>
      </header>
      
    </div>
  )
}

export default Navbar
