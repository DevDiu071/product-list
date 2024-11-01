import CartContent from "./CartContent";

type ItemsProps = {
  onDelete: (id: number) => void;
  getCount: (count: number) => number;
  cartItems: {
    name: string;
    price: number;
    id: number;
    count: number;
    totalPrice: number;
  }[];
};

export default function Cart({ cartItems, onDelete }: ItemsProps) {
  return (
    <div className="bg-white p-6 md:col-span-2 sm:self-start">
      <h2 className="text-3xl text-red font-bold sm:text-lg">
        Your Cart({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <div>
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt="illustration-empty"
            className="w-[150px] md:w-[120px] mx-auto my-6 md:my-3"
          />
          <p className="text-lg  my-2 sm:text-lg text-center text-Rose-500 font-semibold md:text-sm md:my-2">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <CartContent cartItems={cartItems} onDelete={onDelete} />
      )}

      {cartItems.length > 0 && (
        <button className="bg-red py-2 px-6 text-sm rounded-3xl w-full text-white">
          Confirm Order
        </button>
      )}
    </div>
  );
}
