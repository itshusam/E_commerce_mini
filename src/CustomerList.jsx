import React, { useEffect, useState } from 'react';
import { getCustomers, deleteCustomer } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then((res) => setCustomers(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteCustomer(id).then(() => setCustomers(customers.filter(c => c.id !== id)));
  };

  return (
    <div className="container mt-5">
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
            <button className="btn btn-danger ml-2" onClick={() => handleDelete(customer.id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
