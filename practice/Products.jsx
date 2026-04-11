import ProductsData from "./products.json";
import StarRating from "./StarRating";
import { useState } from "react";
function Products() {
  console.log(ProductsData);
  const [products, setProducts] = useState(ProductsData.products);

  function BeautyButtonClick() {
    let beautyProducts = ProductsData.products.filter((product) => {
      return product.category === "beauty";
    });
    setProducts(beautyProducts);
  }

  function GroceryClick() {
    let groceryProducts = ProductsData.products.filter((product) => {
      return product.category === "groceries";
    });
    setProducts(groceryProducts);
  }
  function FurnitureClick() {
    let furnitureProducts = ProductsData.products.filter((product) => {
      return product.category === "furniture";
    });
    setProducts(furnitureProducts);
  }
  function ResetFilters() {
    let resetFilter = ProductsData.products.filter((product) => {
      return product.rating <= "3";
    });
    setProducts(resetFilter);
  }
  function handleSorting(event) {
    let orderBy = event.target.value;
    console.log(orderBy);
    let sortedItems = [...ProductsData.products];
    if (orderBy === "asc") {
      sortedItems.sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(sortedItems);
    } else if (orderBy === "desc") {
      sortedItems.sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(sortedItems);
    } else {
      setProducts(sortedItems);
    }
  }
  function handleSortingRating(event) {
    let orderBy = event.target.value;
    console.log(orderBy);
    let sortedItemsRating = [...ProductsData.products];
    if (orderBy === "asc") {
      sortedItemsRating.sort((a, b) => {
        return a.rating - b.rating;
      });
      setProducts(sortedItemsRating);
    } else if (orderBy === "desc") {
      sortedItemsRating.sort((a, b) => {
        return b.rating - a.rating;
      });
      setProducts(sortedItemsRating);
    } else {
      setProducts(sortedItemsRating);
    }
  }
  return (
    <div className=" bg-slate-50">
      <div className="flex gap-4 justify-between px-2 py-1">
        <button
          className="bg-blue-400 rounded-xl px-2 py-1 text-white font-bold"
          onClick={BeautyButtonClick}
        >
          Beauty Products
        </button>
        <button
          className="bg-amber-100 rounded-xl px-2 py-1 text-black font-bold"
          onClick={FurnitureClick}
        >
          furniture
        </button>
        <button
          className="bg-green-400 rounded-xl px-2 py-1 text-purple-500 font-bold"
          onClick={GroceryClick}
        >
          Grocries
        </button>
        <button
          className="bg-green-400 rounded-xl font-semibold text-white px-2 "
          onClick={ResetFilters}
        >
          ResetFilter
        </button>
      </div>
      <div className="flex  justify-between mt-2 px-2">
        <div className="border border-black">
          <select onChange={handleSorting}>
            <option value={"none"}>Price Filter</option>
            <option value={"desc"}>High to Low</option>
            <option value={"asc"}>Low to High</option>
            <option value={"none"}>Reset</option>
          </select>
        </div>
        <div className="border border-black">
          <select onChange={handleSortingRating}>
            <option value={"none"} className="bg-amber-100">
              Select According Rating
            </option>
            <option value={"desc"}>Above-3</option>
            <option value={"asc"}>under-3</option>
            <option value={"none"}>Reset</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 container mx-auto">
        {products.map((product, index) => {
          return (
            <div
              className=" bg-white rounded-2xl  w-auto gap-4 mt-4 mb-4 hover:cursor-pointer hover:scale-102 hover:shadow-sm duration-300 border border-slate-200 "
              key={index}
            >
              <div className="bg-slate-100 relative">
                <span className="absolute top-2 left-2 bg-white rounded-2xl border px-2 py-1 border-gray-200 text-xs font-medium text-gray-800">
                  {product.category.charAt(0).toUpperCase()}
                  {product.category.slice(1)}
                </span>
                <span className="absolute top-2 right-2  bg-amber-100 rounded-2xl px-2 py-1 text-xs font-medium text-amber-800">
                  -{product.discountPercentage.toFixed(1)}%
                </span>

                <img src={product.thumbnail} />
              </div>
              <div className="px-4 py-2">
                <div className="flex justify-between gap-4">
                  <h1 className="font-semibold">{product.title}</h1>
                  <h1 className="font-bold">${product.price}</h1>
                </div>
                <h1 className="text-xs text-gray-600 line-clamp-2 mt-2">
                  {product.description}
                </h1>{" "}
                <div className="flex justify-between mt-4">
                  <div className="flex gap-2">
                    <StarRating rating={product.rating} />
                    <h1 className="text-xs text-gray-600">
                      ({product.rating})
                    </h1>
                  </div>
                  <h1 className="bg-gray-100 text-xs rounded-2xl px-2">
                    {" "}
                    {product.stock} {product.availabilityStatus}
                  </h1>
                </div>
                <div className="flex gap-4 mt-4">
                  {product.tags.map((tag, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <h1 className="bg-indigo-50 text-indigo-800 rounded-xl px-2 py-1 text-xs">
                            {tag}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
