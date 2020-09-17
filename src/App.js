import React from 'react';
import './App.css';
import Header from './components/Headers/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import Shipping from './components/Shipping/Shipping';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    
     <div> 
      <Router>
      <Header></Header>
      <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/shipping">
            <Shipping></Shipping>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/review">
            <ReviewOrder></ReviewOrder>
          </Route>
          <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/">
          <Shop></Shop>
          </Route>

          <Route path="*">
          <h4>Erro 404</h4>
          </Route>
        </Switch>
      </Router>
      </div>

   
  );
}

export default App;
