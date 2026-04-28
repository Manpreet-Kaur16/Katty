import ProductRow from "./ProductRow";

function ProductTable({ fruitCategory, vegetableCategory }) {
  return (
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
          return <ProductRow item={fruit} key={index} />;
        })}

        <tr>
          <td>
            <h1 className="font-bold">Vegetable </h1>
          </td>
        </tr>
        {vegetableCategory.map((vegetable, index) => {
          return <ProductRow item={vegetable} key={index} />;
        })}
      </tbody>
    </table>
  );
}
export default ProductTable;
