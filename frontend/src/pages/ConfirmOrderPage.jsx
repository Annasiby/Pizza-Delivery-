import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmOrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, totalPrice } = location.state || { cart: [], totalPrice: 0 };

  const [billing, setBilling] = useState({ name: "", address: "", phone: "" });

  const handleChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = () => {
    if (!billing.name || !billing.address || !billing.phone) {
      alert("Please fill all billing details!");
      return;
    }

    // Redirect to Thank You page
    navigate("/thank-you");
  };

  const handleGenerateBill = () => {
    if (!billing.name || !billing.address || !billing.phone) {
      alert("Please enter billing details to generate the bill!");
      return;
    }

    // Redirect to Bill Display page with order details
    navigate("/bill", {
      state: {
        order: {
          id: new Date().getTime(),
          customerName: billing.name,
          date: new Date().toLocaleDateString(),
          items: cart,
          total: totalPrice + 30, // Including GST & platform fee
          address: billing.address,
          phone: billing.phone,
        },
      },
    });
  };

  return (
    <div style={styles.container}>
      <h2>Confirm Your Order ✅</h2>

      {/* Order Summary */}
      <div style={styles.summary}>
        <h3>Order Summary</h3>
        {cart.map((item, index) => (
          <p key={index}>🍕 {item.name} - ₹{item.price}</p>
        ))}

        <p>GST and platform fee: ₹30</p>
        <h3>Total: ₹{totalPrice + 30}</h3>
      </div>

      {/* Billing Details */}
      <div style={styles.form}>
        <h3>Delivery Address Details</h3>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} style={styles.input} required />
        <input type="text" name="address" placeholder="Delivery Address" onChange={handleChange} style={styles.input} required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} style={styles.input} required />

        {/* Buttons */}
        <button style={styles.confirmButton} onClick={handleConfirmOrder}>
          Confirm Order
        </button>
        
        <button style={styles.billButton} onClick={handleGenerateBill}>
          Generate Bill
        </button>

        <p>Note: Only cash on delivery currently available</p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: { textAlign: "center", padding: "20px" },
  summary: { border: "1px solid #ccc", padding: "10px", marginBottom: "20px" },
  form: { border: "1px solid #ccc", padding: "10px", display: "inline-block" },
  input: { width: "90%", padding: "10px", margin: "10px 0" },
  confirmButton: { backgroundColor: "orange", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", margin: "10px" },
  billButton: { backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", margin: "10px" },
};

export default ConfirmOrderPage;
