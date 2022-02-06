import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './Product.module.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;

    return (
        <div className={styles.product}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className={styles.productName}><Link style={{ color: 'blue' }} to={"/product/" + key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                {props.showAddToCart && <button className={styles.mainButton} onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;