import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Home (){

//SEARCH BAR -- INITIAL STATE
const initialState = {
    searchBar: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [meals, setMeals] = useState([])
  let navigate =useNavigate()


//AXIOS CALL WITH SEARCH
const handleSubmit = async (event) => {
    event.preventDefault()
    if (formState.searchBar){
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?i=${formState.searchBar}`)
    console.log(formState)
    console.log(response.data)
    setMeals(response.data.meals)
    setFormState(initialState)
  } else{
    return(
        <h1>That is not a main item</h1>
    )
  }
}

const handleChange= ( event ) => {
  setFormState({ ...formState, [event.target.id]: event.target.value })
}

const showMeal = (idMeal) => {
    navigate(`/${idMeal}`)
}

return (
    <div className="home">


        <div id="search">
                <form onSubmit={handleSubmit}>
                    <input placeholder="search" type="text" id="searchBar" onChange={handleChange} value={formState.searchBar}></input>
                    <button id="submit-search" type="submit">Enter</button>
                </form>
        </div>
        <div className="home-display">
                {meals.length > 0 ? (
                    meals.map((meal, key) => (
                        <button id="recipeBtn" onClick={() => (navigate(`/SearchDetails/${meal.idMeal}`))}>
                            <div key={key} onClick={() => showMeal(meal.idMeal)} className="card">
                                <div id="menu-card">
                                    <img src={meal.strMealThumb} id="food-img"></img>
                                    <h5 id="meal-title">{meal.strMeal}</h5>
                                </div>
                            </div>
                        </button>
                    ))
                ) : (
                    <div>
                        <div id="waiting">
                        <h1 id="waiting-txt">Finding Meals...</h1>
                        </div>
                    </div>
                )}
        </div>
    </div>
)
}