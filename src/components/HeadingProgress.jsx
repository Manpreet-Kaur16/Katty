function Heading(props) {
  return <h1>{props.name}</h1>;
}

function Progress(props) {
  function calculatePercentage(value) {
    value = parseInt(value);
    return (value / 5) * 500;
  }
  return (
    <div className="w-[500px] bg-gray-200 rounded-full h-2 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: calculatePercentage(props.value) }}
      ></div>
    </div>
  );
}

export { Heading, Progress };
