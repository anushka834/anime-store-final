import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

function Checkout() {

  const { totalPrice } = useContext(CartContext);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");

  const handleOrder = () => {

    if (
      !name ||
      !address ||
      !phone ||
      !payment
    ) {

      alert("Please fill all details");

      return;
    }

    alert("Order Placed Successfully!");

  };

  return (

    <div className="bg-black text-white min-h-screen p-10">

      <h1 className="text-5xl font-bold mb-10">

        Checkout

      </h1>

      <div className="max-w-2xl mx-auto space-y-6">

        {/* NAME */}

        <div>

          <label className="block mb-2 text-xl">

            Full Name

          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-white text-black border-2 border-gray-300"
          />

        </div>

        {/* ADDRESS */}

        <div>

          <label className="block mb-2 text-xl">

            Delivery Address

          </label>

          <textarea
            placeholder="Enter full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-4 rounded-xl bg-white text-black border-2 border-gray-300 h-32"
          />

        </div>

        {/* PHONE */}

        <div>

          <label className="block mb-2 text-xl">

            Phone Number

          </label>

          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 rounded-xl bg-white text-black border-2 border-gray-300"
          />

        </div>

        {/* PAYMENT */}

        <div>

          <label className="block mb-2 text-xl">

            Payment Method

          </label>

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="w-full p-4 rounded-xl bg-white text-black border-2 border-gray-300"
          >

            <option value="">
              Select Payment Method
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="PhonePe">
              PhonePe
            </option>

            <option value="Google Pay">
              Google Pay
            </option>

            <option value="Paytm">
              Paytm
            </option>

            <option value="Card">
              Debit / Credit Card
            </option>

            <option value="COD">
              Cash On Delivery
            </option>

          </select>

        </div>

        {/* TOTAL */}

        <div className="bg-zinc-900 p-6 rounded-2xl">

          <h2 className="text-4xl font-bold">

            Total: ₹{totalPrice}

          </h2>

        </div>

        {/* BUTTON */}

        <button
          onClick={handleOrder}
          className="bg-green-500 hover:bg-green-600 transition px-6 py-5 rounded-2xl text-2xl font-bold w-full"
        >

          Place Order

        </button>

      </div>

    </div>

  )
}

export default Checkout;