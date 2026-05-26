import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  // ADD TO CART

  const addToCart = (product) => {

    const exist = cart.find(

      (item) => item.id === product.id

    );

    if (exist) {

      const updatedCart = cart.map((item) =>

        item.id === product.id

          ? { ...item, qty: item.qty + 1 }

          : item

      );

      setCart(updatedCart);

    } else {

      setCart([

        ...cart,

        { ...product, qty: 1 }

      ]);

    }

  };

  // REMOVE FROM CART

  const removeFromCart = (id) => {

    const updatedCart = cart.filter(

      (item) => item.id !== id

    );

    setCart(updatedCart);

  };

  // INCREASE QUANTITY

  const increaseQty = (id) => {

    const updatedCart = cart.map((item) =>

      item.id === id

        ? { ...item, qty: item.qty + 1 }

        : item

    );

    setCart(updatedCart);

  };

  // DECREASE QUANTITY

  const decreaseQty = (id) => {

    const updatedCart = cart.map((item) =>

      item.id === id && item.qty > 1

        ? { ...item, qty: item.qty - 1 }

        : item

    );

    setCart(updatedCart);

  };

  // TOTAL PRICE

  const totalPrice = cart.reduce(

    (total, item) =>

      total + item.price * item.qty,

    0

  );

  return (

    <CartContext.Provider
      value={{

        cart,

        addToCart,

        removeFromCart,

        increaseQty,

        decreaseQty,

        totalPrice

      }}
    >

      {children}

    </CartContext.Provider>

  )
}

export default CartProvider