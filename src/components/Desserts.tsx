import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

type CartItemsType = {
  name: string;
  price: number;
  id: number;
  count: number;
  totalPrice: number;
};

type Item = {
  onAddToCart: (id: number) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onClickAdd: boolean;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemsType[]>>;
  cartItems: {
    name: string;
    price: number;
    count: number;
    id: number;
    totalPrice: number;
  }[];
  items: {
    name: string;
    category: string;
    price: number;
    id: number;
    count: number;
    totalPrice: number;
  }[];
  item: {
    name: string;
    category: string;
    price: number;
    id: number;
    count: number;
    totalPrice: number;
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
};

export default function Desserts({
  item,
  items,
  setCartItems,
  onIncrement,
  onDecrement,
  cartItems,
}: Item) {
  const [flipButton, setFlipButton] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const handleButtonFlip = (id: number) => {
    setFlipButton(true);
    const filtered = items.find((item) => item.id === id);
    if (filtered) {
      setCartItems((prev) => [...prev, filtered]);
    }
  };

  const itemExist = (id: number) => {
    const foundItem = cartItems.find((found) => found.id === id);
    return foundItem !== undefined;
  };

  return (
    <div className="mb-6">
      <img className="rounded-lg" src={`${item.image.mobile}`} alt="thumnail" />
      {flipButton && itemExist(item.id) ? (
        <button className="flex items-center gap-x-6 md:gap-x-7 bg-red  justify-between py-2 md:py-1.5 border border-red md:px-4 px px-8 rounded-3xl  mx-auto -mt-[18px] z-40 relative">
          <span className="text-white">
            <CiCircleMinus
              className="hover:bg-white transition-all hover:rounded-lg hover:text-Rose-900"
              onClick={() => {
                onDecrement(item.id);
                setCount((count) => (count > 1 ? count - 1 : count));
              }}
            />
          </span>
          <span className="text-white text-xs font-semibold">{count}</span>
          <span className="text-white">
            <CiCirclePlus
              className="hover:bg-white transition-all hover:rounded-lg hover:text-Rose-900"
              onClick={() => {
                onIncrement(item.id);
                setCount((count) => count + 1);
              }}
            />
          </span>
        </button>
      ) : (
        <button
          onClick={() => handleButtonFlip(item.id)}
          className="flex items-center gap-x-2 bg-white py-2 md:py-1 md:px-4 px px-8 rounded-3xl border-2 border-solid border-Rose-300 mx-auto -mt-[18px] z-10 relative"
        >
          <img
            src="../../assets/images/icon-add-to-cart.svg"
            alt="icon"
            width={20}
            height={20}
          />
          <span className="text-lg sm:text-xs font-semibold">Add to Cart</span>
        </button>
      )}
      <p className="text-Rose-500 text-lg md:text-sm">{item.category}</p>
      <p className="text-2xl font-semibold md:text-lg">{item.name}</p>

      <p className="text-xl text-red font-semibold md:text-lg">${item.price}</p>
    </div>
  );
}
