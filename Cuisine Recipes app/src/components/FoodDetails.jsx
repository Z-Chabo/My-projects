import { useEffect } from "react";
import { useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList.jsx";
export default function FoodDetail({ foodId,buttonClicked }) {

  const [food, setFodd] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "47df00575e4848c28696f528eb5e4604";
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFodd(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  if(!buttonClicked){
    return <div>Click on a recipe to see details</div>
  }
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚Ready in {food.readyInMinutes} minutes </strong>
          </span>
          <span>🥕{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
          <span>👨‍👩‍👧‍👦 Serves {food.servings}</span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
        <div>
          <span>💲{(food.pricePerServing / 100).toFixed(2)} Per serving</span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food}/>
        <h1>Instructions </h1>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
