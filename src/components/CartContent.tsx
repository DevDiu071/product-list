type CartItemsProps = {
  onDelete: (id: number) => void;
  cartItems: {
    name: string;
    price: number;
    id: number;
    count: number;
    totalPrice: number;
  }[];
};

export default function CartContent({ cartItems, onDelete }: CartItemsProps) {
  const totalSales = cartItems.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);
  return (
    <div>
      {cartItems.map((item) => (
        <div
          className="flex justify-between items-center mt-2 mb-3 border-b border-Rose-100 pb-2"
          key={Math.random()}
        >
          <div>
            <p className="text-xs mb-1 font-semibold">{item.name}</p>
            <div className="flex text-xs gap-x-2">
              <p className="text-red font-bold">{item.count}x</p>
              <p className="text-Rose-300">@${item.price}</p>
              <p className="text-Rose-400 font-bold">
                ${item.price * item.count}
              </p>
            </div>
          </div>
          <img
            className="border border-Rose-500 rounded-2xl p-px cursor-pointer"
            src="./assets/images/icon-remove-item.svg"
            alt="remove item icon"
            onClick={() => onDelete(item.id)}
          />
        </div>
      ))}
      <div className="flex justify-between items-center my-4">
        <p className="text-xs text-Rose-500">Order Total</p>
        <p className="font-bold text-xl">${totalSales}</p>
      </div>
      <div className="flex items-center justify-center bg-Rose-50 rounded-md py-2 gap-x-2 my-4">
        <img
          src="./assets/images/icon-carbon-neutral.svg"
          alt="carbon-neutral-icon"
          width={17}
          height={17}
        />
        <p className="text-xs">
          This is a <strong>carbon neutral</strong> delivery
        </p>
      </div>
    </div>
  );
}
