import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
   
      <Link to="/">
  <h1>Anime Store</h1>
</Link>

      <h2>Welcome to Anime Store</h2>

      <p>Buy amazing anime products here.</p>

      <hr />

      <h3>Policy Pages</h3>

      <ul>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>

        <li>
          <Link to="/terms">Terms & Conditions</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        <li>
          <Link to="/refund-policy">Refund Policy</Link>
        </li>

        <li>
          <Link to="/shipping-policy">Shipping Policy</Link>
        </li>
      </ul>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy and protect your personal information.
      </p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

function Terms() {
  return (
    <div>
      <h1>Terms & Conditions</h1>
      <p>
        By using this website, you agree to our terms and conditions.
      </p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: support@animestore.com</p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

function RefundPolicy() {
  return (
    <div>
      <h1>Refund Policy</h1>
      <p>
        Refunds are processed according to our refund policy.
      </p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

function ShippingPolicy() {
  return (
    <div>
      <h1>Shipping Policy</h1>
      <p>
        Orders are shipped within 3-7 business days.
      </p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/refund-policy" element={<RefundPolicy />} />

        <Route path="/shipping-policy" element={<ShippingPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;