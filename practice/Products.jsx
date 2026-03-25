import ProductsData from "./products.json";
import StarRating from "./StarRating";

function Products() {
  console.log(ProductsData);
  let products = ProductsData.products;
  console.log(products);
  return (
    <div className=" bg-slate-50">
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
