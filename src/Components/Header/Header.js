import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ( {resetRandomMeal }) => {
  const logo = <img className='logo' src={require('../../assets/logo1.png')} alt='flavor quest logo'/>

  const handleLogoClick = () => {
    resetRandomMeal()
  }

  return (
    <header className='header-container'>
      <div className='logo-container'>
        <Link to='/' onClick={handleLogoClick}>{logo}</Link>
      </div>
      <h2 className='slogan'>"Unlock Your Inner Chef: Unleash creativity with our Meal Generator"</h2>
    </header>
  )
}


export default Header