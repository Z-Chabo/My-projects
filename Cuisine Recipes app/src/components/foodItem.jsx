import styles from './foodItem.module.css'
export default function FoodItem({food, setFoodId,setButtonClicked}){ 
    if (!(food)) {
    return <p>Loading...</p>;
  }
    return (
        <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} alt=""/>
        <div className={styles.itemContent}><p className={styles.itemName}>{food.title}</p></div>
        <div className={styles.buttonContainer}>
        <button onClick ={()=>{ setButtonClicked(true); setFoodId(food.id)}}className={styles.itemButton}>View Recipe</button>
        
          </div>
        </div>
    )
}