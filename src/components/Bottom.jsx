import {
  MapPin,
  Hourglass,
  Star,
  House,
  FlaskConical,
  Hand,
} from "lucide-react";

import { BottomItem } from "./Characterstics";

function Bottom(props) {
  return (
    <div className="grid grid-cols-3 mt-4 bg-sky-100">
      <BottomItem />
      <BottomItem />
      <BottomItem />
      <BottomItem />
      <div className="flex gap-2">
        <span className="text-purple-500">
          <MapPin />
        </span>
        <h1>Origin:</h1>
        <p>Thailand</p>
      </div>
      <div className="flex gap-2">
        <span className="text-purple-500">
          <Hourglass />
        </span>
        <h1>{props.title}</h1>
        <p>{props.value}</p>
      </div>
      <div className="flex gap-2">
        <span className="text-purple-500">
          <Star />
        </span>
        <h1>Rare:</h1>
        <p>Yes</p>
      </div>
      <div className="flex gap-2">
        <span className="text-purple-500">
          <House />
        </span>
        <h1>Indoor:</h1>
        <p>No</p>
      </div>
      <div className="flex gap-2">
        <span className="text-purple-500">
          <FlaskConical />
        </span>
        <h1>Experimental:</h1>
        <p>No</p>
      </div>
      <div className="flex gap-2">
        <span className="text-purple-500">
          <Hand />
        </span>
        <h1>Hypoallregenic:</h1>
        <p>No</p>
      </div>
    </div>
  );
}
export default Bottom;
