import Item from "./item.jsx"
export default function ItemList({food}){
    return <div>{food.extendedIngredients?.map((item) => (
          <Item item={item}/>
        ))}</div>
}