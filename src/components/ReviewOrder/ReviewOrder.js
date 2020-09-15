import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProductReview from '../ProductReview/ProductReview';
import Cart from '../Cart/Cart';
import  HappyImage from'../../images/giphy.gif';
import './ReviewOrder.css'


const ReviewOrder = () => {
    const [orderPlaced, setOrderPlaced]=useState(false);

    const handalePlaceOrder =()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const [cart,setCart] = useState([]);
    useEffect(()=>{
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts= productKeys.map(key =>{
            const product = fakeData.find(pd =>pd.key===key);
            product.quantity =savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);
    


    const removeItem =(productKey)=>{
        
        const newCart =cart.filter(pd =>pd.key !==productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    let thanks;
    if(orderPlaced){
        thanks = <img src={HappyImage}/>
    }
    return (
        <div className="reviewProductContent">
            <div className="reviewProduct">
                {
                    cart.map(pd => <ProductReview key={pd.key} removeProduct={removeItem} product={pd}></ProductReview>)
                }
                <br></br>
                {thanks}
            </div>
            <div className="reviewCart">
                <Cart cart={cart}>
                <button onClick={handalePlaceOrder} className="addToCartBtn">Place order</button>
                </Cart>
            </div>
        </div>
    );
};

export default ReviewOrder;