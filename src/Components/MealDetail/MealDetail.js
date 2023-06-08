import React from "react";
import './MealDetail.css'
import { Link } from 'react-router-dom'
import fetchData from "../../ApiCalls";
import PropTypes from 'prop-types'

function MealDetail({ randomMeal, newMeal }) {  //pass in randomMeal function to be called onClick of new meal button
  console.log(randomMeal[0])
  const meal = randomMeal[0]
  const mealId = meal.idMeal
  console.log(newMeal)

  const videoUrl = meal.strYoutube;
  const videoId = videoUrl.split('v=')[1];

  // Construct the embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}`
  
  

  return (
    <div className="meal-detail-container">
      <div className="details"> 

        <section className="meal-description">
          <div className="name-image">
            <img className="meal-image" src={meal.strMealThumb} alt="Meal Thumbnail" />
            <h1 className="meal-name">{`${meal.strMeal} | ${meal.strArea} | ${meal.strCategory}`}</h1>

          </div>
          <p className="meal-instructions">{meal.strInstructions}</p>
        </section>
        <div className="meal-detail-buttons-container">
          <Link to={`/shoppingList/${mealId}`}>
            <button>Shopping List</button>
          </Link>
          <Link to="/randomMeal">
            <button onClick={newMeal}>New Meal</button>
          </Link>
        </div>
        <div className="player" id="player">
          <iframe
            title="Meal Video"
            width="560" // Set the desired width
            height="315" // Set the desired height
            border="0"
            src={embedUrl}
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

        




export default MealDetail

MealDetail.propTypes = {
  randomMeal: PropTypes.array,
  newMeal: PropTypes.func.isRequired
}