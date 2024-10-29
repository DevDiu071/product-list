import DesertsList from "./DesertsList";
import data from "../data.json";
import Cart from "./Cart";

export default function App() {
  console.log(data);
  return (
    <div className="mx-5 md:mx-[50px] sm:grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-x-4 mt-6">
      <DesertsList items={data} />
      <Cart />
    </div>
  );
}
