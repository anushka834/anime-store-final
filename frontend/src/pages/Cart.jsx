import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { Link } from "react-router-dom";

function Cart() {

  const {

    cart,

    removeFromCart,

    increaseQty,

    decreaseQty,

    totalPrice

  } = useContext(CartContext);

  return (

    <div className="bg-black text-white min-h-screen p-10">

      <h1 className="text-5xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (

        <h2 className="text-2xl">
          Cart is Empty
        </h2>

      ) : (

        <div className="space-y-6">

          {cart.map((item) => (

            <div
              key={item.id}
              className="bg-zinc-900 p-5 rounded-2xl flex items-center gap-5"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-xl"
              />

              <div className="flex-1">

                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="text-gray-400">
                  {item.category}
                </p>

                <p className="text-yellow-400 text-2xl font-bold mt-2">
                  ₹{item.price}
                </p>

                <div className="flex items-center gap-4 mt-4">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-red-500 px-4 py-2 rounded-lg"
                  >
                    -
                  </button>

                  <p className="text-2xl">
                    {item.qty}
                  </p>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-green-500 px-4 py-2 rounded-lg"
                  >
                    +
                  </button>

                </div>

              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 px-5 py-3 rounded-xl"
              >
                Remove
              </button>

            </div>

          ))}

          <div className="mt-10">

            <h2 className="text-4xl font-bold">
              Total: ₹{totalPrice}
            </h2>

            <Link to="/checkout">

              <button className="bg-green-500 px-6 py-4 rounded-xl mt-8 text-xl font-bold">

                Proceed To Checkout

              </button>

            </Link>

          </div>

        </div>

      )}

    </div>

  )
}

export default Cart