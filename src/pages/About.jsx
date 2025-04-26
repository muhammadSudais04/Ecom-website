
// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const About = () => {
//     return (
//       <div className="container py-5" style={{ color: '#1b263b' }}>
//         <h1 className="mb-4">About Us</h1>
//         <img src="https://icon-library.com/images/icon-for-about/icon-for-about-13.jpg" alt="" />
//         <p>
//           Product App is built to showcase amazing items with a seamless user experience.
//           Our mission is to deliver high-quality UI and a great shopping experience.
//         </p>
//       </div>
//     );
//   };
// export default About

import React from 'react';

const About = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        backgroundColor: '#F8F9FA', // Optional: background color
      }}
    >
      <div className="text-center" style={{ color: '#1b263b', maxWidth: '600px' }}>
        <h1 className="mb-4">About Us</h1>
        <img
          src="https://icon-library.com/images/icon-for-about/icon-for-about-13.jpg"
          alt="About Icon"
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
        />
        <p>Grabshop is a modern e-commerce platform offering a seamless shopping experience.
        We showcase quality products with a clean UI and fast, user-friendly features.
        </p>
      </div>
    </div>
  );
};

export default About;
