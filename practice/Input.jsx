function Input(props){
    return(
        <input 
        style={{
        backgroundColor: props.color || "black",
        color: props.textColor || "white",
        padding: "10px 20px",
        borderRadius: "none",
        cursor: "pointer",
        fontWeight: props.fontWeight || "bold",
      }}
      onClick={props.onPress}
    >
      {" "}
      {props.children}</input>

    )
}

export default Input