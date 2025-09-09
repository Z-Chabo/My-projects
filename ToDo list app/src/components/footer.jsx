import styles from './footer.module.css';
export default function Footer({completedTodos,totalTodos}) {
    return(
        <div className={styles.footer}>completed ToDos: {completedTodos}  totalTodos:{totalTodos}</div>
    )
}