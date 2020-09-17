import React, { createContext } from 'react';
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
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Management from './components/Manage/Management';

export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    
     <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Header></Header>
  <h3>e{loggedInUser.email}</h3>
      <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Management></Management>
          </PrivateRoute>
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
      </UserContext.Provider>

   
  );
}

export default App;
