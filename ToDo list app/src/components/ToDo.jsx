import { useState } from "react"
import Footer from "./footer";
import ToDoitem from "./ToDoitem";
import Form from "./Form";
import TodoList from "./ToDoList";

export default function ToDo() {
    const[todos,setTodos]=useState([]);
    const completedTodos=todos.filter((todo)=>todo.done).length
    const totalTodos=todos.length
    return (
    <div>
    <Form todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
</div>)
}