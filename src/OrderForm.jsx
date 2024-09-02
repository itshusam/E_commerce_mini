import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderForm.css';

const OrderForm = () => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [orderDate, setOrderDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get('/customers');
        setCustomers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCustomers();
    fetchProducts();
  }, []);

  const handleProductChange = (e) => {
    const { value, checked } = e.target;
    setSelectedProducts((prev) =>
      checked ? [...prev, value] : prev.filter((id) => id !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customerId || selectedProducts.length === 0 || !orderDate) {
      setError('Please complete all fields.');
      return;
    }

    try {
      const orderData = {
        customer_id: customerId,
        products: selectedProducts,
        date: orderDate,
      };

      const response = await axios.post('/orders', orderData);

      if (response.status === 200) {
        setSuccess('Order placed successfully!');
        setError('');
      }
    } catch (err) {
      setError('Failed to place the order. Please try again.');
    }
  };

  return (
    <Container>
      <h2>Place an Order</h2>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="customerId">
          <Form.Label>Customer</Form.Label>
          <Form.Control
            as="select"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          >
            <option value="">Select a customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="orderDate">
          <Form.Label>Order Date</Form.Label>
          <Form.Control
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="products">
          <Form.Label>Products</Form.Label>
          {products.map((product) => (
            <Form.Check
              type="checkbox"
              key={product.id}
              label={`${product.name} - $${product.price}`}
              value={product.id}
              onChange={handleProductChange}
            />
          ))}
        </Form.Group>

        <Button variant="primary" type="submit">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default OrderForm;
