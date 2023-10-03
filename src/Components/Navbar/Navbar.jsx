import React, { useState,useEffect } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

 const Navbar = () => {

  
const [token,settoken]=useState(localStorage.getItem('token'))

  const [menuOpen, setMenuOpen] = useState(false);
 
  const handleLogout = () => {

    localStorage.removeItem("token");
    settoken(false)
  
  };
  useEffect(()=>{
    settoken(localStorage.getItem('token'))
  })

  
  return (
    <nav>
      <Link to="/home" className="title">
       Lonex
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/branches">Branches</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact-Us</NavLink>
        </li>
        {
         token? (<li>
          <button onClick={handleLogout}>logout</button>
        </li>):( <><li>
          <NavLink to="/login">login</NavLink>
        </li>
        <li>
          <NavLink to="/sign-up">Sign up</NavLink>
        </li>
        </>)

          }
        
       
       
      </ul>
    </nav>
  );
};
export default Navbar