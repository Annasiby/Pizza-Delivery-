import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Function to navigate to Order Page
  const handleOrderNow = () => {
    const orderDetails = {
      items: [
        { name: "Margherita", quantity: 1, price: 199 },
        { name: "Pepperoni", quantity: 1, price: 299 }
      ],
      total: 498,
    };

    navigate("/order", { state: orderDetails }); // Passing order details
  };

  return (
    <div>
      {/* Home Container */}
      <div className="home-container">
        {/* Left Pane - Welcome Message */}
        <div className="left-pane">
          <h2 className="title">Welcome to My Pizza App! 🍕</h2>
          <p className="description">Order your favorite pizza now.</p>

          {/* Order Now Button with Navigation */}
          <button className="order-button" onClick={handleOrderNow}>
            Order Now
          </button>
        </div>

        {/* Right Pane - Pizza Images */}
        <div className="right-pane">
          <img src="/images/pizza1.jpg" alt="Pizza 1" className="small-pizza" />
          <img src="/images/pizza2.jpg" alt="Pizza 2" className="small-pizza" />
          <img src="/images/pizza3.jpg" alt="Pizza 3" className="small-pizza" />
          <img src="/images/pizza4.jpg" alt="Pizza 4" className="small-pizza" />
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <h3>About Us</h3>
        <p>
          At <strong>My Pizza App</strong>, we believe that great pizza brings people together! 
          We use only the freshest ingredients to craft delicious, hot, and cheesy pizzas 
          that satisfy every craving. Whether you're a fan of the classics or love adventurous 
          toppings, we've got something for you.
        </p>
        <p>
          Our mission is simple: to deliver high-quality pizzas, fast and fresh, 
          right to your doorstep. So why wait? Grab a slice of happiness today! 🍕🎉
        </p>
      </div>
    </div>
  );
}

export default Home;
