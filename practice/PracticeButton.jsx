function PracticeButton(props) {
  return (
    <button
      className="rounded-2xl border-2 border-amber-300"
      style={{
        backgroundColor: props.backgroundColor || "red",
        color: props.color || "blue",
        fontSize: props.fontSize,
        padding: "10px 20px",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export default PracticeButton;
