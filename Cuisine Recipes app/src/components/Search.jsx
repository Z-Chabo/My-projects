import {useEffect,useState} from "react"
import Styles from './search.module.css'
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="47df00575e4848c28696f528eb5e4604"

export default function Search({foodData,setFoodData}){ 
    const [query,setQuery]=useState("pizza")
    const [searchTerm,setSearchTerm]=useState("")
    useEffect(()=>{
    if (!searchTerm) return
    async function fetchFood(){const res= await fetch(`${URL}?query=${searchTerm}&apiKey=${API_KEY}`)
    const data=await res.json()
    console.log(data.results)
    setFoodData(data.results)
    } fetchFood()},[searchTerm])
    return (
        <div className={Styles.searchContainer}>
            <input className={Styles.input} onChange={(e)=>{setQuery(e.target.value)}}type="text" value={query}/>
            <button onClick={()=>{setSearchTerm(query)}}>Search</button>
        </div>
    )
}