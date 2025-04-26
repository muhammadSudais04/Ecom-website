
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../configure/redux/reducers/fetchSlice';
import { addToCart } from '../configure/redux/reducers/cartSlice';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.fetch);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const product = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    window.Swal.fire({
      title: 'Item successfully added to the cart 🛒',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  };

  if (!product) return <div className="text-center text-light mt-5">Loading product...</div>;

  return (
    <div className="container py-5 text-light">
      <div className="row shadow rounded overflow-hidden" style={{ backgroundColor: '#1c1c1c' }}>
        <div className="col-md-6 p-4 d-flex align-items-center justify-content-center bg-dark">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <h2 className="mb-3 fw-bold text-white">{product.title}</h2>
          <p className="text-light mb-4" style={{ fontSize: '1.1rem' }}>
            {product.description}
          </p>
          <h4 className="text-success fw-semibold mb-4">Price: ${product.price}</h4>

          <button
            className="btn btn-outline-light btn-lg px-4 py-2 align-self-start"
            onClick={handleAddToCart}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;