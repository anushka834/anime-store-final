import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

function Privacy() {
  return <h1>Privacy Policy</h1>;
}

function Terms() {
  return <h1>Terms & Conditions</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

function Refund() {
  return <h1>Refund Policy</h1>;
}

function Shipping() {
  return <h1>Shipping Policy</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", background: "#111", minHeight: "100vh" }}>
        
        <nav
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/privacy" style={{ color: "white" }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: "white" }}>Terms</Link>
          <Link to="/contact" style={{ color: "white" }}>Contact</Link>
          <Link to="/refund" style={{ color: "white" }}>Refund Policy</Link>
          <Link to="/shipping" style={{ color: "white" }}>Shipping Policy</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
