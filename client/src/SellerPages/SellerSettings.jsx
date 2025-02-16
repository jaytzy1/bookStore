import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SellerSettings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">Settings</h2>
      {
        /* 
         <div className="mb-4">
        <h4>Theme</h4>
        <div className="form-check">
          <input
            type="radio"
            id="light-theme"
            name="theme"
            value="light"
            checked={theme === 'light'}
            onChange={handleThemeChange}
            className="form-check-input"
          />
          <label htmlFor="light-theme" className="form-check-label">Light Theme</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="dark-theme"
            name="theme"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
            className="form-check-input"
          />
          <label htmlFor="dark-theme" className="form-check-label">Dark Theme</label>
        </div>
      </div>

        */
      }
     
      <div className="mb-4">
        <h4>Notifications</h4>
        <div className="form-check">
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={handleNotificationsChange}
            className="form-check-input"
          />
          <label htmlFor="notifications" className="form-check-label">Enable Notifications</label>
        </div>
      </div>

      <div className="mb-4">
        <h4>Account Settings</h4>
        <p>Manage your account details, change your password, or update your email address.</p>
        {/* 
        <button className="btn btn-primary">Change Password</button>
        <button className="btn btn-secondary ml-2">Update Email</button>
        */}
      </div>

      <div className="mb-4">
        <h4>Help Center</h4>
        <p>If you need further assistance, visit our <Link to='/HelpCenter'>Help Center</Link>.</p>
      </div>
    </div>
  );
};

export default SellerSettings;
