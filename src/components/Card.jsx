
import React from 'react';

const Card = ({ title, description, image, price, onAddToCart, buttonText }) => {
  return (
    <div className="card bg-dark text-white shadow-lg">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{
          objectFit: 'cover',
          height: '250px',
        }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text fs-4">Price: ${price}</p>
        {onAddToCart && (
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary btn-lg px-4 py-2"
              onClick={onAddToCart}
            >
              {buttonText || 'Add to Cart'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;