import RecipesData from "./recipes.json";
import StarRating from "./StarRating";
import { Flame, CookingPot, Clock, Utensils } from "lucide-react";
function Recipes() {
  console.log(RecipesData);
  let recipes = RecipesData.recipes;
  return (
    <div className="bg-slate-50">
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        {recipes.map((recipe, index) => {
          return (
            <div
              className=" bg-white rounded-2xl  w-auto gap-4 mt-4 mb-4 hover:cursor-pointer hover:scale-102 hover:shadow-sm duration-300 border border-slate-200 "
              key={index}
            >
              <div className="relative">
                <span className=" rounded-xl bg-white text-amber-800 px-2 py-1 text-xs font-semibold absolute top-2 right-4">
                  {recipe.difficulty}
                </span>

                <span className="text-xs rounded-xl bg-black/60 text-white absolute bottom-2 left-4 px-2 py-1 flex gap-2">
                  <Clock className="h-3 w-3" />{" "}
                  {recipe.cookTimeMinutes + recipe.prepTimeMinutes}min{" "}
                  <Utensils className="h-3 w-3" /> {recipe.servings} servings
                </span>
                <img src={recipe.image} />
              </div>
              <div className="px-4 py-4">
                <div>
                  <div className="flex px-2 py-1 justify-between">
                    <h1>{recipe.name}</h1>
                    <h1>{recipe.cuisine}</h1>
                  </div>

                  <div>
                    <span className="line-clamp-1 text-xs px-2 py-1">
                      {recipe.instructions}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <StarRating rating={recipe.rating} />
                  <h1 className="text-xs text-gray-600 font-bold">
                    {recipe.rating}
                  </h1>
                  <h1 className="text-xs text-gray-600">
                    ({recipe.reviewCount} reviews)
                  </h1>
                </div>

                <div className="flex gap-2 mt-2">
                  {recipe.tags.map((tag, index) => {
                    return (
                      <span key={index}>
                        <h1 className="rounded-2xl bg-amber-200 text-xs px-2 py-1 text-gray-600">
                          {tag}
                        </h1>
                      </span>
                    );
                  })}
                </div>
                <div className="border border-t border-gray-200 my-4"></div>
                <div className="flex justify-between gap-4">
                  <div className="flex items-center">
                    <Flame className="text-amber-500 h-3 w-3" />
                    <span className="px-2 py-1 text-gray-700 text-xs">
                      {recipe.caloriesPerServing}kcl/Serving
                    </span>{" "}
                  </div>

                  <div className="flex items-center">
                    <CookingPot className="h-3 w-3" />
                    <span className="px-2 py-1 text-gray-700 text-xs">
                      prep-{recipe.prepTimeMinutes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Recipes;
