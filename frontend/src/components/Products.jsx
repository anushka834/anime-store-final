import naruto from "../images/naruto.jpg";
import luffy from "../images/luffy.jpg";
import goku from "../images/goku.jpg";
import tanjiro from "../images/tanjiro.jpg";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Products() {

  const { addToCart } = useContext(CartContext);

  const products = [

    {
      id: 1,
      name: "Naruto Figure",
      category: "Naruto",
      price: 2999,
      image: naruto
    },

    {
      id: 2,
      name: "Luffy Gear 5",
      category: "One Piece",
      price: 4599,
      image: luffy
    },

    {
      id: 3,
      name: "Goku Ultra Instinct",
      category: "Dragon Ball",
      price: 5999,
      image: goku
    },

    {
      id: 4,
      name: "Tanjiro Figure",
      category: "Demon Slayer",
      price: 3499,
      image: tanjiro
    }

  ];

  return (

    <div className="bg-black text-white p-10 min-h-screen">

      <h1 className="text-5xl font-bold mb-10">
        Anime Figures
      </h1>

      <div className="grid md:grid-cols-4 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-zinc-900 rounded-2xl p-5"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl"
            />

            <h2 className="text-2xl font-bold mt-4">
              {product.name}
            </h2>

            <p className="text-gray-400">
              {product.category}
            </p>

            <p className="text-yellow-400 text-3xl font-bold mt-2">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 w-full py-3 rounded-xl mt-4"
            >
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Products