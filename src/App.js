import React, { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Games from './components/Pages/Gaming';
import Finance from './components/Pages/Finance';
import Social from './components/Pages/Social';
import NavigationBar from './components/Navbar/Navigation';
import Login from './components/Pages/Login';
import './App.css';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <Fragment>
      {/* Render NavigationBar component for all routes except '/login' */}
      {location.pathname !== '/login' && <NavigationBar />}
      <div className={`${!isLoginPage ? 'content' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gaming" element={<Games />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/social" element={<Social />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
