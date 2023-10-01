import React, {useState} from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  
  // Add the handlesubmit code here
  function handlesubmit(e) {
    e.preventDefault();
    let todo = document.getElemenetById('todoAdd').value
    const newToDo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newToDo.text.length > 0) {
      setToDos([...todos].concat(newToDo));
    } else {
      alert ("Enter a Valid Task");
    }
    document.getElementById('todoAdd').value = ""
    }
  
  // Add the deleteToDo code here

  
  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
return(
<div className ="App">
<h1>Todo List</h1>
<form>
<input type ="text" align ="right" id= 'todoAdd'/>
<button type ="submit">Add Todo</button>
</form>
</div>
);
};
export default App;
