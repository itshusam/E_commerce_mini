import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import OrderForm from './OrderForm';
import HomePage from './HomePage';
import NotFound from './NotFound';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/customers">Customers</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/orders">Place Order</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/customers" component={CustomerList} />
        <Route path="/products" component={ProductList} />
        <Route path="/orders" component={OrderForm} />
        <Route path="/customer/create" component={CustomerForm} />
        <Route path="/product/create" component={ProductForm} />
        <Route path="/" exact component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
