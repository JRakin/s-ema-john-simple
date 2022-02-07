import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";

const Info = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawResponse = await fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        address: address,
        cart: cart,
      }),
    });
    const content = await rawResponse.json();

    console.log(content);

    if (content) {
      processOrder();
      setOrderPlaced(true);
    }
  };

  return (
    <div style={{ marginLeft: "100px" }}>
      <h4>Please, fill out this form!</h4>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <br />
        <input
          required
          type="text"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          required
          style={{ width: "500px" }}
          name="Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Info;
