
// src/pages/addToCart.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQ, decreaseQ, addTotalPriceAndQuantity } from '../configure/redux/reducers/cartSlice';
import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalPrice);
  const fixedTotal = total.toFixed(2);

  useEffect(() => {
    dispatch(addTotalPriceAndQuantity());
  }, [dispatch, cartItems]);

  const increaseQuantity = (cart) => {
    dispatch(increaseQ(cart.id));
    dispatch(addTotalPriceAndQuantity());
  };

  const decreaseQuantity = (cart) => {
    dispatch(decreaseQ(cart.id));
    dispatch(addTotalPriceAndQuantity());
  };

  return (
    <div className="container py-5 text-light">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-white">
          <i className="bi bi-cart3 me-2 text-purple" /> Your Cart
        </h1>
        <p className="text-secondary">Review and manage your items</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center text-muted">
          <h5>Your cart is currently empty.</h5>
          <button
            className="btn btn-outline-light mt-3"
            onClick={() => navigate('/products')}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {cartItems.map((cart) => (
              <div key={cart.id} className="col-md-6 col-lg-4">
                <div className="card bg-dark border border-secondary shadow-sm h-100">
                  <img
                    src={cart.thumbnail}
                    alt={cart.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-white">{cart.title}</h5>
                    <p className="text-muted mb-2">
                      Price: <span className="text-success fw-bold">${cart.price}</span>
                    </p>
                    <p className="text-muted">
                      Quantity: <span className="text-info fw-bold">{cart.quantity}</span>
                    </p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <div className="btn-group" role="group">
                        <button
                          onClick={() => decreaseQuantity(cart)}
                          className="btn btn-sm btn-outline-danger"
                        >
                          -
                        </button>
                        <button
                          onClick={() => increaseQuantity(cart)}
                          className="btn btn-sm btn-outline-success"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total & Checkout Section above Footer */}
          <div className="mt-5 p-4 bg-black border-top border-secondary rounded shadow-lg">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <h4 className="text-light mb-3 mb-md-0">
                Total: <span className="text-success">${fixedTotal}</span>
              </h4>
              <button
                className="btn btn-purple px-4 py-2 rounded-pill fw-semibold shadow text-white border-white"
                onClick={() => alert("Proceeding to checkout...")}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;