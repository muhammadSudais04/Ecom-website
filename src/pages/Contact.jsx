
// import React from 'react'

// const Contact = () => {
//     return (
//       <div className="container py-5" style={{ color: 'white' }}>
//         <h1 className="mb-4">Contact Us</h1>
//         <img src="https://th.bing.com/th/id/OIP.I9ILOU9MvDd171cTLQ0ppAHaHa?rs=1&pid=ImgDetMain" alt="" className='p-4'/>
//         <p>If you have any questions or feedback, we’d love to hear from you!</p>
//         <ul>
//           <li>Email: contactusproductapp@gmail.com</li>
//           <li>Phone: +92 3xxxxxxx</li>
//         </ul>
//       </div>
//     );
//   };

// export default Contact

import React from 'react';

const Contact = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: 'white', color: '#1B263B' }}
    >
      <div className="text-center p-4" style={{ maxWidth: '600px' }}>
        <h1 className="mb-4">Contact Us</h1>
        <img
          src="https://th.bing.com/th/id/OIP.I9ILOU9MvDd171cTLQ0ppAHaHa?rs=1&pid=ImgDetMain"
          alt="Contact Icon"
          className="p-4"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p>If you have any questions or feedback, we’d love to hear it from you!</p>
        <ul className="list-unstyled">
          <li>Email: grapshop@gmail.com</li>
          <li>Phone: +92 3000000000</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
