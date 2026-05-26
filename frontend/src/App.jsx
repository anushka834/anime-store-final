import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function Home() {

  return (

    <div>

      <Hero />

      <Categories />

      <Products />

      <Footer />

    </div>

  )
}

function App() {

  return (

    <div className="bg-black min-h-screen">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

      </Routes>

    </div>

  )
}

export default App;