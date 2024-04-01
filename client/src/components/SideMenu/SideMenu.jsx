<<<<<<< HEAD
import { React, useState } from "react";
import useDebounce from "debounce-hook-react";
import { Link } from "react-router-dom";
import "./SideMenu.css";
import { IoMdHelpCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useAuthContext } from "../../context/authContext";

const SideMenu = ({ menuItems }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const { user, setUser } = useAuthContext();
=======
import {React, useState} from 'react';
import useDebounce from 'debounce-hook-react';
import { Link } from 'react-router-dom';
import './SideMenu.css'
import { IoMdHelpCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const SideMenu = ({menuItems}) => {

  const [activeMenuItem, setActiveMenuItem] = useState(null);
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
  const debouncedSetActive = useDebounce(setActiveMenuItem, 100); // Debounce time in milliseconds

  const handleClick = (item, event) => {
    // Check if clicked target is not the child menu itself
<<<<<<< HEAD
    if (event.target !== event.currentTarget.querySelector("ul")) {
=======
    if (event.target !== event.currentTarget.querySelector('ul')) {
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
      // setActiveMenuItem(item.label === activeMenuItem ? null : item.label);
      debouncedSetActive(item.label);
    }
  };

<<<<<<< HEAD
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  if (!user) return null;

  return (
    <div className="side-menu">
      <div id="menu-title">
        <span className="side-menu-logo">
          <img src="./logo.png" alt="LOGO" />
        </span>
        <span>BUCOOP</span>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.label}
            // className='side-menu-list'
            // className={`${activeMenuItem === item.label ? 'active' : ''} side-menu-list`}
            className={`${
              activeMenuItem === item.label
                ? "active visible"
                : "side-menu-list"
            }`}
            onMouseDown={(event) => handleClick(item, event)}
          >
            <div>
              <span className="side-menu-icon">{item.icon}</span>
              <span>
                <Link to={item.link}>{item.label}</Link>
              </span>
            </div>

            {item.children && (
              <div id="children-list">
                {item.children.map((mini) => (
                  <div id="children-list-div">
                    <span className="side-menu-icon">{mini.miniIcon}</span>
                    <span>
                      <Link to={mini.miniLink}>{mini.miniLabel}</Link>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <ul>
        <li key={"Help"} className="side-menu-list">
          <div>
            <span className="side-menu-icon">
              <IoMdHelpCircle />
            </span>
            <span>
              <Link to={"/help"}>Help</Link>
            </span>
          </div>
        </li>
        <li key={"Settings"} className="side-menu-list">
          <div>
            <span className="side-menu-icon">
              <IoSettings />
            </span>
            <span>
              <Link to={"/settings"}>Settings</Link>
            </span>
          </div>
        </li>
      </ul>

      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
=======
  return (
      <div className='side-menu'>
        <div id='menu-title'>
          <span className='side-menu-logo'><img src="./logo.png" alt="LOGO" /></span>
          <span>BUCOOP</span>
        </div>
        <ul>
          {menuItems.map((item) => (
      
            <li 
            key={item.label} 
            // className='side-menu-list'
            // className={`${activeMenuItem === item.label ? 'active' : ''} side-menu-list`}
            className={`${activeMenuItem === item.label ? 'active visible' : 'side-menu-list'}`}
            onMouseDown={(event) => handleClick(item, event)}
            >
              <div>
                <span className='side-menu-icon'>{item.icon}</span>
                <span><Link to={item.link}>{item.label}</Link></span>
              </div>

              {item.children && (
                <div id='children-list'>
                    {item.children.map((mini) => (
                      <div id='children-list-div'>
                        <span className='side-menu-icon'>{mini.miniIcon}</span>
                        <span><Link to={mini.miniLink}>{mini.miniLabel}</Link></span>
                      </div>
                    ))}
                </div>
                
              )}

            </li>
          ))}
        </ul>

        <ul>
          <li key={'Help'} className='side-menu-list'>
            <div>
              <span className='side-menu-icon'><IoMdHelpCircle /></span>
              <span><Link to={'/help'}>Help</Link></span>
            </div>
          </li>
          <li key={'Settings'} className='side-menu-list'>
            <div>
              <span className='side-menu-icon'><IoSettings /></span>
              <span><Link to={'/settings'}>Settings</Link></span>
            </div>
            
          </li>
        </ul>
        
        <button className='logout'>Logout</button>
      </div>
    
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
  );
};

export default SideMenu;
