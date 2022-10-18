// In this InputArea component
// we have one function that can store the user input in array
// after user click the button
import React, { useState } from "react";

// Component can be passed as props
// props are like function argument
function InputArea(props) {
  const [inputText, setInputText] = useState("");
  // handleChange function:
  // when user click the add button, handle change function will update the new user input
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />

      <button
        onClick={() => {
          props.onAdd(inputText); // after button be clicked, call onAdd function and setInputText function
          setInputText(""); // reset inputText as empty String
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
