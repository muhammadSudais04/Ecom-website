
import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => {
    return (
      <div className="d-flex flex-column min-vh-100 bg-#1b263b">
        <Navbar />
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

export default Layout;