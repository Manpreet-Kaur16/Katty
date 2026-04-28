import { useState, useEffect } from "react";
function UseEffectDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffectDemo without dependency Array");
  });

  useEffect(() => {
    console.log("UseEffectDemo with empty dependency Array");
  }, []);

  useEffect(() => {
    console.log("UseEffectDemo with count dependency Array", count);
  }, [count]);
  return (
    <div>
      <h1>UseEffectDemo</h1>
      <button
        className="bg-blue-400 text-white rounded-xl px-2 py-1"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Click me {count}times
      </button>
    </div>
  );
}
export default UseEffectDemo;
