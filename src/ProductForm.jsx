import React, { useState } from 'react';
import { createProduct, updateProduct } from './api';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
const ProductForm = ({ match }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const history = useHistory();
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price };
    if (match.params.id) {
      updateProduct(match.params.id, product).then(() => history.push('/products'));
    } else {
      createProduct(product).then(() => history.push('/products'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Price</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
