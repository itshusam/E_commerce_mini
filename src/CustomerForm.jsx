import React, { useState } from 'react';
import { createCustomer, updateCustomer } from "./api"
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const CustomerForm = ({ match }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const history = useHistory();
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = { name, email, phone };
    if (match.params.id) {
      updateCustomer(match.params.id, customer).then(() => history.push('/customers'));
    } else {
      createCustomer(customer).then(() => history.push('/customers'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default CustomerForm;
