import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='z-10 sticky top-0 bg-slate-800 text-white font-serif shadow-xl'>
      <div className='flex justify-between px-5 h-15 items-center'>
        <Link to='/' className='text-2xl cursor-pointer hover:text-blue-200'>Barackobama</Link>
        <div className='gap-3 hidden md:flex '>
          <Link to="/" className='cursor-pointer hover:text-blue-200'>Home</Link>
          <Link to="/about" className='cursor-pointer hover:text-blue-200'>About</Link>
          <Link to="/progress" className='cursor-pointer hover:text-blue-200'>Progress</Link>
          <Link to="/gallery" className='cursor-pointer hover:text-blue-200'>Gallery</Link>
          <Link to="invoced" className='cursor-pointer hover:text-blue-200'>Get Involved</Link>
          <Link to="/schedule" className='cursor-pointer hover:text-blue-200'>Schedule</Link>
          <Link to="contactus" className='cursor-pointer hover:text-blue-200'>Contact Us</Link>
        </div>
        {/* {/* carsole */}
        <div className='min-md:hidden'>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">&#9776;
          </button>

          <div id="dropdown" class=" hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link to="/" class="block px-4 py-2 hover:bg-gray-100">Home</Link>
                <Link to="/about" class="block px-4 py-2 hover:bg-gray-100">About</Link>
                <Link to="/progress" class="block px-4 py-2 hover:bg-gray-100">Progress</Link>
                <Link to="/gallery" class="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
                <Link to="invoced" class="block px-4 py-2 ps-4 hover:bg-gray-100" >Get Involved</Link>
                <Link to="/schedule" class="block px-4 py-2 hover:bg-gray-100">Schedule</Link>
                <Link to="/contactus" class="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar
