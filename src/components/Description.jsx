import { Weight, CalendarDays } from "lucide-react";
import Badge from "./Badges";
import Button from "./Button";

export default function Description() {
  return (
    <div>
      <div className="flex gap-4 items-center">
        {" "}
        <h1 className="text-2xl font-bold">Koret</h1>
        <h3 className="bg-blue-200 rounded-xl px-2">Thiland</h3>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptates a, et repudiandae culpa perspiciatis, temporibus soluta
          nostrum illum dignissimos accusantium, dolore commodi molestias error.
          Deleniti corrupti nihil recusandae harum!
        </p>
      </div>
      <div className="flex gap-2">
        <Badge name="Active" />
        <Badge name="Loyal" />
        <Badge name="Friendly" />
        <Badge name="Experimental" />
      </div>
      <div className="flex gap-4 mt-4">
        <div className="flex">
          <Weight />
          <p> 3-5 kg</p>
        </div>

        <div className="flex ">
          {" "}
          <CalendarDays />
          10-15 Years
        </div>
      </div>

      <div className="flex gap-4 text-sm text-blue-600 font-medium mt-4">
        <a href="#wikipedia" className="hover:underline">
          Wikipedia
        </a>
        <a href="#CFA" className="hover:underline">
          CFA
        </a>
        <a href="#VCN" className="hover:underline">
          VCN-Hospitals
        </a>
      </div>
      <Button
        color="green"
        textColor="orange"
        fontSize="15px"
        fontWeight="light"
        onPress={() => {
          alert("pink button clicked");
        }}
      >
        Click on pink Button
      </Button>
    </div>
  );
}
