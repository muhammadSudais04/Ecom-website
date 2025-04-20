
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../configure/redux/reducers/fetchslice';
import { addToCart } from '../configure/redux/reducers/cartSlice';
import { Link } from 'react-router-dom';

const Products = () => {
  const dispatch = useDispatch();
  const fetchState = useSelector((state) => state.fetch);
  const { products, loading, error } = fetchState || {};

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Using window.Swal from CDN
    window.Swal.fire({
      title: 'Item successfully added to the cart 🛒',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  };

  if (loading) return <div className="text-center text-light mt-5">Loading...</div>;
  if (error) return <div className="text-danger text-center mt-5">Error: {error}</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-white fw-bold">PRODUCTS</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card bg-dark text-light h-100 shadow-lg border-light">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '0.5rem',
                  borderTopRightRadius: '0.5rem',
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-success fw-bold">${product.price}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-outline-light btn-sm btn-primary"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-secondary btn-sm"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;