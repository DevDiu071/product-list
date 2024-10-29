import Desserts from "./Desserts";

type DesertsListProps = {
  items: {
    name: string;
    category: string;
    price: number;
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
};

export default function DesertsList(props: DesertsListProps) {
  console.log(props);
  return (
    <div className="md:grid md:col-span-3 lg:col-span-4 md:gap-x-3">
      <p className="text-2xl font-bold mb-4">Deserts</p>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-3">
        {props.items.map((item) => (
          <Desserts item={item} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
