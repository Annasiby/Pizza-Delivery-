import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const pizzas = [
  { id: 1, name: "Margherita", image: "/images/pizza1.jpg", rating: 4.5, hotel: "Pizza Hub", price: 199 },
  { id: 2, name: "Pepperoni", image: "/images/pizza2.jpg", rating: 4.7, hotel: "Italiano Pizzeria", price: 299 },
  { id: 3, name: "BBQ Chicken", image: "/images/pizza3.jpg", rating: 4.6, hotel: "Smoky Bites", price: 349 },
  { id: 4, name: "Veggie Delight", image: "/images/pizza4.jpg", rating: 4.3, hotel: "Green Bites", price: 249 },
];

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    navigate("/confirm-order", { state: { cart, totalPrice } }); // Pass cart data
  };

  return (
    <div style={styles.container}>
      <h2>Order Your Favorite Pizza 🍕</h2>

      <div style={styles.pizzaList}>
        {pizzas.map((pizza) => (
          <div key={pizza.id} style={styles.pizzaCard}>
            <img src={pizza.image} alt={pizza.name} style={styles.image} />
            <h3>{pizza.name}</h3>
            <p>⭐ {pizza.rating} | 🏨 {pizza.hotel}</p>
            <p>₹{pizza.price}</p>
            <button style={styles.addButton} onClick={() => addToCart(pizza)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={styles.cart}>
          <h3>Your Cart 🛒</h3>
          {cart.map((item, index) => (
            <p key={index}>🍕 {item.name} - ₹{item.price}</p>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
          <button style={styles.placeOrderButton} onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

// Styles
const styles = {
  container: { textAlign: "center", padding: "20px" },
  pizzaList: { display: "flex", justifyContent: "center", flexWrap: "wrap" },
  pizzaCard: { border: "1px solid #ccc", padding: "15px", margin: "10px", textAlign: "center", width: "220px", borderRadius: "10px" },
  image: { width: "100%", borderRadius: "10px" },
  addButton: { backgroundColor: "green", color: "white", padding: "8px", border: "none", cursor: "pointer" },
  cart: { marginTop: "20px", padding: "15px", border: "1px solid #ccc", display: "inline-block" },
  placeOrderButton: { backgroundColor: "blue", color: "white", padding: "10px", border: "none", cursor: "pointer" },
};

export default OrderPage;
