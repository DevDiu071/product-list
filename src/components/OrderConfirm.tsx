type CartItemsType = {
  reset: () => void;
  cartItems: {
    name: string;
    price: number;
    id: number;
    count: number;
    totalPrice: number;
  }[];
};

export default function OrderConfirm({ cartItems, reset }: CartItemsType) {
  const totalSales = cartItems.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);

  return (
    <div className="bg-white px-4  pb-6 pt-6 fixed w-[350px] z-50 transform -translate-x-1/2 -translate-y-1/2 top-[250px] left-1/2 m-auto rounded-md">
      <img
        src="./assets/images/icon-order-confirmed.svg"
        alt="icon-order-confirmed"
        className="mb-2"
        width={25}
        height={25}
      />
      <h2 className="font-bold text-2xl mb-1">Order Confirmed</h2>
      <p className="text-xs mb-4 text-Rose-500">We hope you enjoy your food</p>
      <div className="bg-Rose-50 py-2 px-4 rounded-md">
        {cartItems.map((item) => (
          <div
            className="flex justify-between items-center mt-2 mb-1 border-b border-Rose-100 pb-2"
            key={Math.random()}
          >
            <div>
              <p className="text-sm mb-1 font-semibold">{item.name}</p>
              <div className="flex text-sm gap-x-2">
                <p className="text-red font-bold">{item.count}x</p>
                <p className="text-Rose-300">@${item.price}</p>
              </div>
            </div>
            <p className="text-Rose-400 text-sm font-bold">
              ${item.price * item.count}
            </p>
          </div>
        ))}
        <div className="flex justify-between items-center my-4">
          <p className="text-sm text-Rose-500">Order Total</p>
          <p className="font-bold text-xl">${totalSales}</p>
        </div>
      </div>
      <button
        onClick={reset}
        className="bg-red py-2 px-6 text-sm rounded-3xl w-full text-white"
      >
        Start New order
      </button>
    </div>
  );
}
