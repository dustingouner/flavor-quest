import React from 'react'
import './HomePage.css'


const HomePage = () => {

  return (
    <section className='home'>
      <div className='content-container'>
        <h2 className='homePage-question'>Are you ready to try out your new meal?</h2>
        <div className='home-buttons-container'>
          <button className='random-meal-button'>Random Meal</button>
          <button className='takeout-button'>Take Out</button>
        </div>
      </div>
    </section>
  )
}







export default HomePage