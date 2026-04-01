import SearchBar from "./SearchBar";
import ProductTable from "./ProductTAble";
function DestructringArray() {
  const fruits = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  let fruitCategory = fruits.filter((fruit) => {
    return fruit.category === "Fruits";
  });
  console.log(fruitCategory);

  let vegetableCategory = fruits.filter((fruit) => {
    return fruit.category === "Vegetables";
  });
  console.log(vegetableCategory);
  return (
    <div>
      <div className="bg-slate-100 h-max-auto w-auto p-8">
        <SearchBar />

        <div className="border border-black px-2 py-1 w-fit ">
          <ProductTable
            fruitCategory={fruitCategory}
            vegetableCategory={vegetableCategory}
          />
        </div>
      </div>
    </div>
  );
}
export default DestructringArray;
