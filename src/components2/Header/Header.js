import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css";
const Header = () => {
  return (
    <header className='showcase'>
      <div className='showcase-top'>
        <img src='https://i.ibb.co/r5krrdz/logo.png' alt='logo'/>
        <Link to="/" className='btn bt-rounded'> Sign in</Link>
        
      </div>
      <div className='showcase-content'>
         <h1>Unlimited Movies,TV Shows And More</h1> 
         <p>Watch anywhere,Cancel anytime</p>
         <Link style={{width:"400px",
                      height:"50px",
                      fontSize:"25px",
                      paddingTop:"20px"
         }} to="/show" className='btn btn-xl'>
          
            Watch Free for 30 Days
            <i className='fas fa-chevron-right btn-icon'></i>
         </Link>
      </div>
    </header>
  )
}

export default Header
