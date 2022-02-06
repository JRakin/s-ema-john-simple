import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    let totalPrice = 0;
    //finding total price
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + (product.price * product.quantity);
    }

    //calculation of tax and shipping cost
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
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;