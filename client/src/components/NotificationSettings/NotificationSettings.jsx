import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuRefreshCw } from "react-icons/lu";
import './NotificationSettings.css'
import '../Settings/Settings.css'

<<<<<<< HEAD
const NotificationSettings = ({updatedSetting}) => {
=======
const NotificationSettings = ({updatedSetting, security}) => {
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf

    const [notifications, setNotifications] = useState(null);
    // const [errorMessage, setErrorMessage] = useState(null);


    const handleChangeNotifications = (event) => {
        setNotifications(event.target.value);
      };
  
    return (
      <div className="wrapper-container">
        <div className="intro-container">
          <span>Customize Here</span>
          <span className='refresh'>
            <span>Refresh</span>
            <span><LuRefreshCw className='refresh'/></span>
          </span>
        </div>
  
        <div className="title-container">
          <h2>Notification Settings</h2>
        </div>

        <div className='settings-menu'>
<<<<<<< HEAD
            <span><Link to="/settings">Account Settings</Link></span>
            <span><Link to="/loginsecurity">Login & Secuity</Link></span>
            <span><Link to="/notificationsettings">Notifications</Link></span>
=======
            <span><Link to={security[0]}>Account Settings</Link></span>
            <span><Link to={security[1]}>Login & Secuity</Link></span>
            <span><Link to={security[2]}>Notifications</Link></span>
>>>>>>> 634869d0a14147a70b774e6cbb6ae6535dd16cbf
        </div>

        <div className="input-container" id='settings-container'>
  
          <div className="input-bar">
            <label htmlFor="notifications">Do you want to Receive Notifications?</label>
            <div className='radio-buttons'>
                <input
                    type="radio"
                    id="yes"
                    value="yes"
                    checked={notifications === 'yes'}
                    onChange={handleChangeNotifications}
                />
                <label htmlFor="yes">Yes</label>
            </div>

            <div className='radio-buttons'>
                <input
                    type="radio"
                    id="no"
                    value="no"
                    checked={notifications === 'no'}
                    onChange={handleChangeNotifications}
                />
                <label htmlFor="no">No</label>
            </div>
            
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </div>

        </div>

        <div className="submit-container" id='update-container'>
            <button onClick={updatedSetting}>Update Changes</button>
          </div>
  
      </div>
    )
}

export default NotificationSettings