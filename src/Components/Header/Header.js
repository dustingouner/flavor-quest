import React from 'react'
import './Header.css'

const Header = () => {
  const logo = <img className='logo' src={require('../../assets/logo1.png')} alt='flavor quest logo'/>

  return (
    <header className='header-container'>
      <div className='logo-container'>
        {logo}
      </div>
      <h2 className='slogan'>"Unlock Your Inner Chef: Unleash creativity with our Meal Generator"</h2>
    </header>
  )
}


export default Header