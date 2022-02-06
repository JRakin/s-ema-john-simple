import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    // console.log(props)
    const {name, quantity, key, price} = props.product;
    const reviewItenStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5x',
        paddingBottom: '5px',
        marginLeft: '200px'


    }
    return (
        <div style = {reviewItenStyle} className = "review-item">
            <h4 className = "productName">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <br />
            <button 
            className = "mainButton"
            onClick = {() => props.removeProduct(key)}
            >Remove</button>
            
        </div>
    );
};

export default ReviewItem;