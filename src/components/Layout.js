// src/components/Layout.js
import React from 'react';
import './Layout.css'; // Create a CSS file for styling if needed

const Layout = ({ children }) => {
  return (
    <div>
      <div className="Titlebar">
        <h2>THE CLOUD <span style={{ color: "#FF9900" }}>CERTIFIED</span></h2>
      </div>
      {children}
    </div>
  );
};

export default Layout;
