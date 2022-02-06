import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Info = () => {
    const [cart, setCart] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    const handleBlur = (e) => {
        const newInfo =  {name:e.target.name, value: e.target.value};
        const newUserInfo = [...userInfo, newInfo];
        setUserInfo(newUserInfo);

    }
    console.log(userInfo);

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
        <div style = {{marginLeft: "100px"}}>
        <h4>Please, fill out this form!</h4>
        <form>
            <input type="text" name= "Name" onBlur = {handleBlur} placeholder = "Name" />
            <br />
            <input type="text" name= "Email" onBlur = {handleBlur} placeholder = "Email" />
            <br />
            <input style = {{width: "500px"}} name= "Address" type="text" onBlur = {handleBlur} placeholder = "Address" />
            <br />
            <br />
            <input type="submit" value="Submit" />
            


        </form>
        </div>
    );
};

export default Info;