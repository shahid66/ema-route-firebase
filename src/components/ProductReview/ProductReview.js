import React from 'react';
import './ProductReview.css';



const ProductReview = (props) => {
    
const{name,quantity,key,price}=props.product;
    return (
        <div className="reviewContent">
            <h4 className="product-name" >{name}</h4>
            <h6>{quantity}</h6>
            <p><small>{price}</small></p>
            <button className="addToCartBtn" onClick={()=>props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ProductReview;