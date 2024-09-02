import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => setProducts(products.filter(p => p.id !== id)));
  };

  return (
    <div className="container mt-5">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button className="btn btn-danger ml-2" onClick={() => handleDelete(product.id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
