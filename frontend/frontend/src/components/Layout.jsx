import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            marginRight: '10px'
          })}
        >
          Home
        </NavLink>

        <NavLink 
          to="/about" 
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            marginRight: '10px'
          })}
        >
          About
        </NavLink>

        <NavLink 
          to="/products" 
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            marginRight: '10px'
          })}
        >
          Products
        </NavLink>

        <NavLink 
          to="/dashboard" 
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Dashboard
        </NavLink>
      </nav>

      {/* Page content */}
      <Outlet />
    </div>
  );
};

export default Layout;