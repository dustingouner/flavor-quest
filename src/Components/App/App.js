import React, { Component } from 'react'
import fetchData from '../../ApiCalls';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import MealDetail from '../MealDetail/MealDetail';
import ShoppingList from '../ShoppingList/ShoppingList';
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      randomMeal: [], 
      error: ''
    }
  }

  componentDidMount() {
    this.getRandomMeal()
    }

  getRandomMeal = () => {
    fetchData()
    .then(data => this.setState({ randomMeal: data }))
    .catch(error => console.log(error))
  }

  resetRandomMeal = () => {
      this.getRandomMeal()
  }
  
  render() {
    
    return (
      <div className='App'>
        <Header resetRandomMeal={this.resetRandomMeal} />
        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path='/randomMeal'>
            <MealDetail randomMeal={this.state.randomMeal.meals} newMeal={this.getRandomMeal} />
          </Route>
          <Route exact path='/shoppingList/:mealId'>
            <ShoppingList randomMeal={this.state.randomMeal.meals}/>
          </Route>
        </Switch>
      </div>
    )
  }
}


export default App;