export default function Cart() {
  return (
    <div className="bg-white p-6 md:col-span-2 sm:self-start">
      <h2 className="text-3xl text-red font-bold sm:text-xl">Your Cart(0)</h2>
      <img
        src="./assets/images/illustration-empty-cart.svg"
        alt="illustration-empty"
        className="w-[150px] md:w-[120px] mx-auto my-6 md:my-3"
      />
      <p className="text-xl sm:text-lg text-center text-Rose-500 font-semibold md:text-sm">
        Your added items will appear here
      </p>
    </div>
  );
}
