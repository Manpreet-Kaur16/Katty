import Image from "./components/Image";
import Description from "./components/Description";
import Badge from "./components/Badges";
import { Characterstics } from "./components/Characterstics";
import { Heading, Progress } from "./components/HeadingProgress";
import Bottom from "./components/Bottom";
import MainComponents from "../practice/MainComponents";
import DemoDynamicContent from "../practice/DemoDynamicContent";
import Products from "../practice/Products";
import Recipes from "../practice/Recipes";
function App() {
  return (
    <div>
      {/* <div className="flex gap-4">
        <Image />
        <Description />
      </div>
      <div>
        <Characterstics />
        <Bottom />
      </div> */}
      {/* <MainComponents /> */}
      {/* <DemoDynamicContent /> */}
      {/* {<Products />} */}
      <Recipes />
    </div>
  );
}
export default App;
