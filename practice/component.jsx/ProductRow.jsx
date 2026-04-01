function ProductRow({ item }) {
  // let textcolor = item.stocked === true ? "black" : "red";
  return (
    <tr>
      <td style={{ color: item.stocked ? "black" : "red" }}>{item.name}</td>
      <td>{item.price}</td>
    </tr>
  );
}
export default ProductRow;
