import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <p>common header</p>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/order'>Order</Link>
            <Link to='/meals'>Meals</Link>
   
        </div>
    );
};

export default Header;