import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/footer"; 
import OrderPage from "./pages/OrderPage";
import ConfirmOrderPage from "./pages/ConfirmOrderPage";
import ThankYouPage from "./pages/ThankYouPage";
import BillDisplay from "./pages/BillDisplay";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/confirm-order" element={<ConfirmOrderPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/bill" element={<BillDisplay />} />

      </Routes>
      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;  // ✅ Make sure this line is present!
