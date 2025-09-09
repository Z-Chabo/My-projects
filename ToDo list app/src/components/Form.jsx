import { useState } from "react";
import styles from './Form.module.css';

export default function Form({todos,setTodos}) {
    //const [todo,setTodo]=useState("");
    const [todo,setTodo]=useState({name:"",done:false})
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false});
    }
    return(
    <form className={styles.tpdoform} onSubmit={handleSubmit} >
    <div className={styles.inputContainer}>
    <input placeholder="Enter todo item..." className={styles.modernInput} onChange={(e)=>setTodo({name:e.target.value ,done:false})} value ={todo.name} type="text"/>
    <button type="submit" className={styles.modernButton}>Add</button>
    </div>
    </form>
    )
}