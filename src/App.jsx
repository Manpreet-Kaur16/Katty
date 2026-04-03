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
import DestructringArray from "../practice/component.jsx/DestructringArray";
import LogIn from "../practice/component.jsx/LogIn";
import Register from "../practice/component.jsx/Register";

function App() {
  return (
    <div className="flex flex-col gap-8 p-4">
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
      {/* <Recipes /> */}
      {/* <DestructringArray/> */}
      <div className="flex gap-4">
        <LogIn />
        <Register />
      </div>
    </div>
  );
}
export default App;
