type Item = {
  item: {
    name: string;
    category: string;
    price: number;
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
};

export default function Desserts({ item }: Item) {
  return (
    <div className="mb-6">
      <img className="rounded-lg" src={`${item.image.mobile}`} alt="thumnail" />
      <button className="flex items-center gap-x-2 bg-white py-2 md:py-1.5 md:px-4 px px-8 rounded-3xl border-2 border-solid border-Rose-300 mx-auto -mt-[25px] z-40 relative">
        <img
          src="../../assets/images/icon-add-to-cart.svg"
          alt="icon"
          width={20}
          height={20}
        />
        <span className="text-lg font-semibold md:text-sm">Add to Cart</span>
      </button>
      <p className="text-Rose-500 text-lg md:text-sm">{item.category}</p>
      <p className="text-2xl font-semibold md:text-lg">{item.name}</p>
      <p className="text-xl text-red font-semibold md:text-lg">${item.price}</p>
    </div>
  );
}
