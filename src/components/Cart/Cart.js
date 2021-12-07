import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)

    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }
    else if (totalPrice > 0) {
        shipping = 12.99;
    }

    const tax = totalPrice / 10
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax+VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(totalPrice + shipping + tax)}</p>
        </div>
    );
};

export default Cart;