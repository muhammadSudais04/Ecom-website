
import React from 'react';

const Footer = () => {
  const goldColor = '#FFD700';
  const blackText = '#000';

  return (
    <footer
      style={{
        backgroundColor: goldColor,
        color: blackText,
        borderTop: '2px solid black',
        textAlign: 'center',
        padding: '20px 0',
        marginTop: '40px',
      }}
    >
      <div className="container">
        <p className="mb-1 fw-semibold">© {new Date().getFullYear()} Product App</p>
        <p className="small mb-0">Crafted with 🖤 & 💡 using React & Bootstrap</p>
      </div>
    </footer>
  );
};

export default Footer;