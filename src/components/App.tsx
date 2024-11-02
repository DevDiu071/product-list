import DesertsList from "./DesertsList";
import data from "../data.json";
import Cart from "./Cart";
import { useState } from "react";
import OrderConfirm from "./OrderConfirm";

export type CartItemsType = {
  name: string;
  price: number;
  id: number;
  count: number;
  totalPrice: number;
};

export default function App() {
  const [cartItems, setCartItems] = useState<CartItemsType[]>([]);
  const [addToCartClicked, setAddToCartClicked] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const handleAddToCard = (id: number) => {
    const filtered = data.find((item) => item.id === id);
    if (filtered) {
      setCartItems((prev) => [...prev, filtered]);
    }
    setAddToCartClicked(true);
    console.log(cartItems);
  };

  const handleDeleteFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCountIncrement = (id: number) => {
    console.log("Test: ", id);
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count + 1,
              totalPrice: (item.count + 1) * item.price,
            }
          : item
      )
    );
    console.log(cartItems);
  };

  const handleCountDecrement = (id: number) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id && item.count > 1
          ? {
              ...item,
              count: item.count - 1,
              totalPrice: (item.count - 1) * item.price,
            }
          : item
      )
    );
  };

  const reset = () => {
    setCartItems([]);
    setConfirm(false);
  };

  return (
    <div className="mx-5 md:mx-[80px] sm:grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-x-4 mt-6">
      {confirm && (
        <div
          onClick={() => setConfirm(false)}
          className="absolute top-0 right-0 bottom-0 w-full height-screen bg-black z-50"
        ></div>
      )}
      <DesertsList
        items={data}
        onAddToCart={handleAddToCard}
        onClickAddToCart={addToCartClicked}
        setCartItems={setCartItems}
        onIncrement={handleCountIncrement}
        onDecrement={handleCountDecrement}
        cartItems={cartItems}
      />
      <Cart
        cartItems={cartItems}
        onDelete={handleDeleteFromCart}
        setConfirm={setConfirm}
      />
      {confirm && <OrderConfirm reset={reset} cartItems={cartItems} />}
    </div>
  );
}
