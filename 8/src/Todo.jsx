import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo(){
    let [todo, setTodo]= useState([{task:"sample task", id:uuidv4()}]);
    let [inpTodo, setInpTodo]= useState("");

    let addNewTask=()=>{
        setTodo([...todo, {task: inpTodo, id:uuidv4()}])
        console.log(todo)
        setInpTodo("");
    }
    let updateTodoValue=(e)=>{
        setInpTodo(e.target.value);
        console.log(e.target.value)
    }
    let deleteValue=(id)=>{
        setTodo((prevTodo)=>{
            todo.filter((prevTodo)=>{
                prevTodo.id!=id
            })
    })
        }
    
    return(
        <>
        <h1>Todo App</h1>
        <input type="text" value={inpTodo} onChange={updateTodoValue}/>
        <button onClick={addNewTask}>Add</button>
        <br /><br />
        <ul>
            {
            todo.map((todo)=>(
            <li key={todo.id}>{todo.task} <br />
            <button onClick={()=>deleteValue(todo.id)}>Delete</button></li>
            
            )) 
            }
            </ul>
        </>
    )
}