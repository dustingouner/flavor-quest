import React from "react";
import './MealDetail.css'
import { Link } from 'react-router-dom'
import fetchData from "../../ApiCalls";

function MealDetail({ randomMeal, newMeal }) {  //pass in randomMeal function to be called onClick of new meal button
  console.log(randomMeal[0])
  const meal = randomMeal[0]

  const videoUrl = meal.strYoutube;
  const videoId = videoUrl.split('v=')[1];

  // Construct the embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}`
  
  

  return (
    <div>
      <img className="meal-image" src={meal.strMealThumb} alt="Meal Thumbnail" />
      <h1 className="meal-name">{`${meal.strMeal} | ${meal.strArea} | ${meal.strCategory}`}</h1>
      <p className="meal-instructions">{meal.strInstructions}</p>

      <button>Shopping List</button>
      <Link to="/randomMeal">
        <button onClick={newMeal}>New Meal</button>
      </Link>

    <div id="player">
      <iframe
        title="Meal Video"
        width="560" // Set the desired width
        height="315" // Set the desired height
        border="0"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  )
}


export default MealDetail