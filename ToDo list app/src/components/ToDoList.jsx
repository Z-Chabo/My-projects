import ToDoitem from "./ToDoitem"
import styles from './ToDoList.module.css';
export default function TodoList({todos,setTodos}) {
    const sortedTodos=todos.sort((a,b)=>(Number(a.done)-Number(b.done)))
    return <div className={styles.list}>
        {sortedTodos.map(item=>(<ToDoitem key={item.name} item={item} todos={todos} setTodos={setTodos}/>))}
        </div>
}