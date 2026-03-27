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
        <div>
          <input
            type="search"
            placeholder="Search..."
            className="border border-black mt-2"
          />
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Only Show products in stock</p>
          </div>
        </div>
        <div className="border border-black px-2 py-1 w-fit ">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h1 className="font-bold">Fruits</h1>
                </td>
              </tr>
              {fruitCategory.map((fruit, index) => {
                return (
                  <tr key={index}>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                  </tr>
                );
              })}

              <tr>
                <td>
                  <h1 className="font-bold">Vegetable </h1>
                </td>
              </tr>
              {vegetableCategory.map((vegetable, index) => {
                return (
                  <tr key={index}>
                    <td>{vegetable.name}</td>
                    <td>{vegetable.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DestructringArray;
