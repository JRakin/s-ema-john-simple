import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    //handling when user clicks on the Place Order button
    const handlePlaceOrder = () => {
        const afterRemove = getDatabaseCart();
        console.log(afterRemove);
        setCart([]);
        processOrder();
        setOrderPlaced(true);

    }

    //removes a product
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts);
    }, []);

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>)
                }
                {
                    orderPlaced && <h3 style = {{marginLeft: "200px", color: "#4BB543"}}>Please, send your address details at shipping@ema-john.com</h3>
                }
                {
                    orderPlaced && <img style={{ marginLeft: "200px", marginTop: "5px" }} src={happyImage} alt="" />
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to = "/info">
                    <button className="mainButton" onClick={handlePlaceOrder}>Place Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;