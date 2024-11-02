import Desserts from "./Desserts";

type CartItemsType = {
  name: string;
  price: number;
  id: number;
  count: number;
  totalPrice: number;
};

type DesertsListProps = {
  onAddToCart: (id: number) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onClickAddToCart: boolean;
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

    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};

export default function DesertsList({
  items,
  onAddToCart,
  onClickAddToCart,
  setCartItems,
  onIncrement,
  onDecrement,
  cartItems,
}: DesertsListProps) {
  return (
    <div className="md:grid md:col-span-3 lg:col-span-4 md:gap-x-3">
      <p className="text-2xl font-bold mb-4">Deserts</p>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-3">
        {items.map((item) => (
          <Desserts
            item={item}
            items={items}
            key={item.id}
            onAddToCart={onAddToCart}
            onClickAdd={onClickAddToCart}
            setCartItems={setCartItems}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
}
