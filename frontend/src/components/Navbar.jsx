import { Link } from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { FaShoppingCart } from "react-icons/fa";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (

    <div className="bg-zinc-900 text-white px-10 py-5 flex justify-between items-center">

      <Link to="/">

        <h1 className="text-4xl font-bold cursor-pointer">
          Anime Store
        </h1>

      </Link>

      <Link to="/cart">

        <button className="bg-yellow-500 px-5 py-3 rounded-xl flex items-center gap-3 text-black font-bold">

          <FaShoppingCart />

          Cart ({cart.length})

        </button>

      </Link>

    </div>

  )
}

export default Navbar;