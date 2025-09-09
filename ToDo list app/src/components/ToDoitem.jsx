import styles from './ToDoItem.module.css';
export default function ToDoitem({item,todos,setTodos}){
    function handleDelete(item) {
        console.log(`Delete item:${item.name}`);
        setTodos(todos.filter((t)=>t.name!==item.name));
    }
    function handleClick(name){
        setTodos(todos.map((t)=>t.name === name?{...t,done:!t.done}:t)) // Log the click event
        console.log(todos)
    }
    const className=item.done?styles.completed:""
    return (
        <div className={styles.item}>
        <div id="item" className={styles.itemName}> <span onClick={()=>handleClick(item.name)} className={className} ><span>{item.name}<button onClick={()=>handleDelete(item)} className={styles.deleteButton}>x</button></span></span></div>
        <hr className={styles.line}/>
        </div>

    )
}