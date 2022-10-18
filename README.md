# To-Do-List-React



## Design Function
1. Add item:
   - use useState to store the user input
   - After user press the add buttom, data of input should be add in an array and display in a list.
2. Delete item
   - When user click the item, item be deleted from the list.


## Implement Function
- There are 3 components in this project.
- 1. `App component`: contains add and delete item and the web mainly layout.
- 2. `InputArea component`: process when user input the item, after user click add buttom. contains handleChange function and button
- 3. `ToDoItem`: process when user click the item, item be deleted from the list. So return html is the list after item be deleted.

### Use Map to delete the item be clicked

- map the item with their index
- return thte ToDoItem component that help us to delete the text
 #### App component
 ```javascript
        <ul>
          {items.map((todoItem, index) => (
            // map the input text with their index
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
 ```
 - deletItem function: use filter() to return the item is not equal to the id
```javascript
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
```
#### ToDoItem component
- When user click the text, trigger the onCheck function than bring the props to deleteItem function
- Then display the page that item be deleted.
```javascript
function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
 ```
 
 ### Update the list after click the add button
 ## App component
 - add addItem function can return the update array.
 ```javascript
   // addItem functin:
  // call setItem function in addItem function to update user input to array
  function addItem(inputText) {
    setItems((prevItems) => {
      // use spread operator to combine 2 array
      // ... copy all of existing array into another array
      return [...prevItems, inputText];
    });
  }
   ```
 - And return result of App component will call the InputArea component
 ```javascript
 <InputArea onAdd={addItem} />
  ```
  
 ## InputArea component
 - when user click the button, onChange will call the handleChange function
```javascript
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
```
- In the handleChange function, we useState to keep update the user input by use setInputText function.
- pass the props of ToDoItem component to delete the give the id to the deleteItem function in App component.
```javascript 
      const [inputText, setInputText] = useState("");
  // handleChange function:
  // when user click the add button, handle change function will update the new user input
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
 ```
## Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
