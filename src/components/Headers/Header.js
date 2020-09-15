import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Review Product</Link>
                <Link to="/manage">Management</Link>
            </nav>
        </div>
    );
};

export default Header;