import Button from "../src/components/Button";
import PracticeButton from "./PracticeButton";

function MainComponents() {
  return (
    <div>
      <h1>Hello</h1>

      <div>
        <PracticeButton
          backgroundColor="pink"
          color="white"
          fontSize="15px"
          onClick={() => {
            alert("you clicked!!!");
          }}
        >
          Click Me{" "}
        </PracticeButton>
      </div>
    </div>
  );
}
export default MainComponents;
