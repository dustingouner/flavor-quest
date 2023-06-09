import React from 'react'
import './HomePage.css'
import { Link } from "react-router-dom"


const HomePage = () => {

  return (
    <section className='home'>
      <div className='content-container'>
        <h2 className='homePage-question'>Are you ready to test your cooking skills?</h2>
        <div className='home-buttons-container'>
          <Link to={'/randomMeal'} style={{textDecoration:'none'}}>
            <button className='random-meal-button'>Random Meal</button>
          </Link>
          <a href="https://www.yelp.com" className="takeout-button">Take Out</a>
        </div>
      </div>
    </section>
  )
}







export default HomePage