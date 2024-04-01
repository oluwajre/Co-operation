import React from 'react'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src\assets\photo_2024-03-26_01-38-55.jpg" alt="Logo" />
      </div>
      <div className="navbar-buttons">
<<<<<<< HEAD
        <button>HOME</button>
        <button>ABOUT</button>

        <button>CONTACT US</button>
      </div>

      <div className="navbar-actions">
        <button>Sign in</button>
        <button>Register</button>
=======
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/contact">Contact</Link></button>
      </div>

      <div className="navbar-actions" id='navbar-layout'>
        <button><Link to="/login">Sign In</Link></button>
        <button><Link to="/register">Register</Link></button>
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
      </div>
    </nav>
  );
};
export default Navbar
