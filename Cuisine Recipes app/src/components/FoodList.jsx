import FoodItem from "./foodItem.jsx"
export default function Foodlist({foodData,setFoodId,setButtonClicked}){ 
    if (!Array.isArray(foodData)) {
    return <p>Loading...</p>;
  }
    return (
        <div>
            {foodData.map((food)=>(<FoodItem setButtonClicked={setButtonClicked} setFoodId={setFoodId} key={food.id} food={food}/>))}
        </div>
    )
}