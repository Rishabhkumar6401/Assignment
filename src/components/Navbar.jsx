import React, { useState } from 'react';
import { TextField, Icon } from '@shopify/polaris';
import { NavLink } from 'react-router-dom';
import { SearchIcon, CaretDownIcon, PersonIcon } from '@shopify/polaris-icons';
import '@shopify/polaris/build/esm/styles.css';
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-white border-b border-gray-300 p-4 flex justify-between items-center shadow-sm h-14">
        
        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="sm:hidden p-2 text-black bg-gray-200 rounded-md"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </button>

       {/* Sliding Sidebar for mobile */}
       <div
          className={`fixed top-0 left-0 h-full bg-white shadow-md transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 w-64 sm:hidden`}
        >
          {/* Cross (Close) Button */}
          <button className="absolute top-4 right-4 p-2 text-black" onClick={toggleSidebar}>
            <CloseIcon />
          </button>
          <nav className="flex flex-col gap-8 p-4">
            <NavLink to="/" className="text-black font-medium" onClick={toggleSidebar}>
              Home
            </NavLink>
            <NavLink to="/order" className="text-black font-medium" onClick={toggleSidebar}>
              Order
            </NavLink>

            {/* Dropdown Menu for Integrations */}
            <div className="group relative">
              <div className="text-black font-medium flex items-center">
                <p>Integrations</p>
                <CaretDownIcon style={{ width: '13px' }} />
              </div>
              <div className="absolute pt-2">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">Hello-1</p>
                  <p className="cursor-pointer hover:text-black">Hello-2</p>
                  <p className="cursor-pointer hover:text-black">Hello-3</p>
                </div>
              </div>
            </div>

            <NavLink to="/partner" className="text-black font-medium" onClick={toggleSidebar}>
              Partner with us
            </NavLink>
          </nav>
        </div>

        {/* Standard Desktop Menu */}
        <nav className="hidden sm:flex gap-8 pl-16">
          <NavLink to="/" className="text-black font-medium">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-purple-700 hidden" />
          </NavLink>
          <NavLink to="/order" className="text-black font-medium">
            <p>Order</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-purple-700 hidden" />
          </NavLink>

          {/* Dropdown for Integrations */}
          <div className="group relative">
            <div className="text-black font-medium flex items-center">
              <p>Integrations</p>
              <CaretDownIcon style={{ width: '13px' }} />
            </div>
            <div className="absolute pt-4 hidden group-hover:block">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">Hello-1</p>
                <p className="cursor-pointer hover:text-black">Hello-2</p>
                <p className="cursor-pointer hover:text-black">Hello-3</p>
              </div>
            </div>
          </div>

          <NavLink to="/partner" className="text-black font-medium">
            <p>Partner with us</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-purple-700 hidden" />
          </NavLink>
        </nav>

        {/* Search and Icons (Both for Desktop and Mobile) */}
        <div className="flex items-center space-x-4 pr-4 sm:pr-16">
          <TextField
            placeholder="Search"
            prefix={<Icon source={SearchIcon} color="inkLightest" />}
            inputClassName="border-none border-b-2 border-gray-300 focus:border-indigo-500 focus:ring-0 px-2 py-1 sm:px-8"
          />
          
          <a href="#" className="text-black font-medium hover:text-purple-700 flex items-center">
            <PersonIcon style={{ width: '23px' }} className="mr-1" />
            Account
          </a>
          <a href="#" className="text-black font-medium hover:text-purple-700">
            Settings
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
