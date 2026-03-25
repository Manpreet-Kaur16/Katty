import { Heading, Progress } from "./HeadingProgress";
import {
  // MapPin,
  Hourglass,
  //Star,
  //House,
  //FlaskConical,
  //Hand,
} from "lucide-react";
function Characterstics() {
  return (
    <div className="bg-slate-50">
      <h1 className="text-2xl font-bold py-2 px-4">Characterstics</h1>
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 px-8">
          <div className="flex items-center gap-4">
            <Heading name="Adapatbility" />
            <Progress value="4" />
            <span>4/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Child friendly" />
            <Progress value="3" />
            <span>3/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Energy level" />
            <Progress value="1" />
            <span>1/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Health Issues" />
            <Progress value="2" />
            <span>2/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Shedding level" />
            <Progress value="3" />
            <span>3/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Stranger Friendly" />
            <Progress value="3" />
            <span>3/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Dog Friendly" />
            <Progress value="5" />
            <span>5/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Affection Leval" />
            <Progress value="5" />
            <span>5/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Grooming" />
            <Progress value="1" />
            <span>1/5</span>
          </div>
          <div className="flex items-center gap-4">
            <Heading name="Intelligence" />
            <Progress value="5" />
            <span>5/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomItem() {
  return (
    <div>
      <div className="flex gap-2">
        <span className="text-purple-500">
          <Hourglass />
        </span>
        <h1 title="Natural Breed">Natural Breed:</h1>
        <p value="No">No</p>
      </div>
    </div>
  );
}
export { Characterstics, BottomItem };
