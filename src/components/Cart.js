import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
