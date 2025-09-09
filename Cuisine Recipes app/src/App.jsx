import { useState, useEffect } from 'react'
import Search from './components/search.jsx'
import Foodlist from './components/FoodList.jsx'
import Nav from './components/Nav.jsx'
import './App.css'
import Container from './components/Container.jsx'
import InnerContainer from './components/innerContainer.jsx'
import FoodDetail from './components/FoodDetails.jsx'


function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId,setFoodId]=useState("")
  const [buttonClicked,setButtonClicked]=useState(false)
  // Load cached data on mount
  useEffect(() => {
    const saved = localStorage.getItem("foodData")
    if (saved) {
      setFoodData(JSON.parse(saved))
    }
  }, [])

  // Save to localStorage whenever foodData changes
  useEffect(() => {
    if (foodData.length > 0) {
      localStorage.setItem("foodData", JSON.stringify(foodData))
    }
  }, [foodData])

  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <Foodlist setButtonClicked={setButtonClicked} setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetail buttonClicked={buttonClicked} foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App

