import React from "react";
import './MealDetail.css'
import { Link } from 'react-router-dom'
import fetchData from "../../ApiCalls";

function MealDetail({ randomMeal, newMeal }) {  //pass in randomMeal function to be called onClick of new meal button
  console.log(randomMeal[0])
  const meal = randomMeal[0]
  
  

  return (
    <div>
      <img className="meal-image" src={meal.strMealThumb}/>
      <h1 className="meal-name">{meal.strMeal}</h1>
      <p className="meal-instructions">{meal.strInstructions}</p>

      <button>Shopping List</button>
      <Link to='/randomMeal'>
        <button onClick={(event) => newMeal(event)}>New Meal</button>
        </Link>
    </div>
  )
}


export default MealDetail