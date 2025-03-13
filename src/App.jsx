// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <Navbar />

      <div className="content">
        {/* Left Pane - Information */}
        <div className="left-pane">
          <h2>About Us</h2>
          <p>Welcome to the best pizza delivery service. We offer the tastiest pizzas with fresh ingredients.</p>

          <h2>Contact</h2>
          <p>Email: support@pizzadelivery.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        {/* Right Pane - Pizza Images */}
        <div className="right-pane">
          <img src="/images/pizza1.jpg" alt="Pizza 1" className="pizza-img" />
          <img src="/images/pizza2.jpg" alt="Pizza 2" className="pizza-img" />
          <img src="/images/pizza3.jpg" alt="Pizza 3" className="pizza-img" />
          <img src="/images/pizza4.jpg" alt="Pizza 4" className="pizza-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
