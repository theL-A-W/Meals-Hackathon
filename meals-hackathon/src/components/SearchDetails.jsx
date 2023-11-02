
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Nav from './Nav'

const SearchDetails = (props) => {

  let { id } = useParams()
  const [recipe, setRecipe] = useState()
  let navigate = useNavigate()


    useEffect(() => {
        const getRecipe = async () => {
                const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                setRecipe(response.data.meals[0])
                console.log(response.data.meals[0])
            }
        getRecipe()
    }, [id])

    // if(response. strInstructions === "STEP"){
    //   return(
    //     <br></br>
    //   )
    // }

  return recipe ? (
    <div id="detail">
          <h1 id="recipeTitle">{recipe.strMeal}</h1>
      <div className="recipeWrapper">
        <div>
                <h3 id="ingredientTitle">Ingredients:</h3>
                <ul id="ingredientList">
                  <li>{recipe.strIngredient1}</li>
                  <li>{recipe.strIngredient2}</li>
                  <li>{recipe.strIngredient3}</li>
                  <li>{recipe.strIngredient4}</li>
                  <li>{recipe.strIngredient5}</li>
                  <li>{recipe.strIngredient6}</li>
                  <li>{recipe.strIngredient7}</li>
                  <li>{recipe.strIngredient8}</li>
                  <li>{recipe.strIngredient9}</li>
                  <li>{recipe.strIngredient10}</li>
                  <li>{recipe.strIngredient11}</li>
                  <li>{recipe.strIngredient12}</li>
                  <li>{recipe.strIngredient13}</li>
                  <li>{recipe.strIngredient14}</li>
                  <li>{recipe.strIngredient15}</li>
                  <li>{recipe.strIngredient16}</li>
                  <li>{recipe.strIngredient17}</li>
                  <li>{recipe.strIngredient18}</li>
                  <li>{recipe.strIngredient19}</li>
                  <li>{recipe.strIngredient20}</li>
                </ul>
              </div>
        <div>
                <h3 id="ingredientTitle">Measurements:</h3>
                <ul id="ingredientList">
                  <li>{recipe.strMeasure1}</li>
                  <li>{recipe.strMeasure2}</li>
                  <li>{recipe.strMeasure3}</li>
                  <li>{recipe.strMeasure4}</li>
                  <li>{recipe.strMeasure5}</li>
                  <li>{recipe.strMeasure6}</li>
                  <li>{recipe.strMeasure7}</li>
                  <li>{recipe.strMeasure8}</li>
                  <li>{recipe.strMeasure9}</li>
                  <li>{recipe.strMeasure10}</li>
                  <li>{recipe.strMeasure11}</li>
                  <li>{recipe.strMeasure12}</li>
                  <li>{recipe.strMeasure13}</li>
                  <li>{recipe.strMeasure14}</li>
                  <li>{recipe.strMeasure15}</li>
                  <li>{recipe.strMeasure16}</li>
                  <li>{recipe.strMeasure17}</li>
                  <li>{recipe.strMeasure18}</li>
                  <li>{recipe.strMeasure19}</li>
                  <li>{recipe.strMeasure20}</li>
                </ul>
              </div>
        </div>
        <div>
                  <h3 id="ingredientTitle">Instructions:</h3>
                  <h5 id="recipeInstructions">{recipe.strInstructions}</h5>
                </div>
        <button id="backBtn" onClick={() => (navigate('/'))}>  back</button>
    </div>
  ) : 
    <div>
      <h3>Finding recipes...</h3>
      <h5>While you wait... Enjoy this Chicken Milkshake</h5>
      <img id="chickenShake" src="https://www.eatpdq.com/images/default-source/news-images/pdq_chickentender_shake_615x380_news-(1).jpg"></img>
      <p>recipe:</p>
      <ul>
        <li>1 whole chicken</li>
        <li>1 gallon of milk</li>
    </ul> 
  </div>
}

export default SearchDetails
