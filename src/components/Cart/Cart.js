import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd )=> total+prd.price * prd.quantity,0);
    let shippingCost=0;

    if(total>15){
        shippingCost=4.99;
    }
    else if(total>50){
        shippingCost=0;
    }
    else if(total>0){
        shippingCost=12.99;
    }
    const tax= (total/10).toFixed(2);
    let grandTotal =total + Number(tax) + shippingCost; 
    return (
        <div>
            <h4> Order summary : {cart.length}</h4>
            
            <h5> Product Price : {Number(total).toFixed(2)}</h5>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p><small>Tax: {tax}</small></p>
            <h3>Total Price : {(grandTotal).toFixed(2)}</h3>
            <br></br>
            {
                props.children
            }
        </div>
    );
};

export default Cart;