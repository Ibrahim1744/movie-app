import React from 'react';
import './header.css'
import {BiCameraMovie} from 'react-icons/bi'
import { Link , NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <div className="container">
          <div className='header-content'>
          <div className="logo">
                <Link to="/">Movies4You</Link>
                <BiCameraMovie className='logo-icon'/>
            </div>
            <ul className='nav-links'>
              
               <NavLink to="/watchlist">Watch List</NavLink>
      
          
                <NavLink to="/watched">Watched</NavLink>
            
            
       
            
              
                
            </ul>
          </div>
           
        </div>
    </div>
  );
}

export default Header;
