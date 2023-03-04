import React from 'react';
import './App.css';
import Form from "./components/form"
import { useState } from "react";
import { Todo } from "./components/models";

const App:React.FC=()=>{
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);

  return (
    <div className="App">
	    <div>
		    <span>Taskify</span>
		    </div>
		<Form todo={todo} setTodo={setTodo}/>
        </div>
  );
}

export default App;
