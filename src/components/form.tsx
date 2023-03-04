import React from "react";
import "./styles/form.css";

interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
}

const Form:React.FC<Props>= ({ todo,setTodo }) => {
	return (
		<div className="form_container">
			<input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="Task" />
			<button>Go</button>
		</div>
	);
};

export default Form;
