import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className=' bg-gray-500 '>
          
          <navbar className='font-serif ... space-x-5 '> 
          <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/order'>Order</Link>
            <Link to='/meals'>Meals</Link>
          </navbar>
        </div>
    );
};

export default Header;