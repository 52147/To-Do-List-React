import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  // use useState to track the user input
  // and store it in array
  const [items, setItems] = useState([]);

  // addItem functin:
  // call setItem function in addItem function to update user input to array
  function addItem(inputText) {
    setItems((prevItems) => {
      // use spread operator to combine 2 array
      // ... copy all of existing array into another array
      return [...prevItems, inputText];
    });
  }
  // delete function:
  // use filter() that return the array that index is not equal to id
  // in this way, we can display an ittem list that do not have deleted item
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            // map the input text with their index
            // return thte ToDoItem component that help us to delete the text
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
