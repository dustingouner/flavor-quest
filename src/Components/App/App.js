import React, { Component } from 'react'
import fetchData from '../../ApiCalls';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import MealDetail from '../MealDetail/MealDetail';
import ShoppingList from '../ShoppingList/ShoppingList';
import Error from '../Error/Error'
import { Route, Switch, Redirect } from 'react-router-dom'
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
    .catch(error => {
      console.log(error);
      this.setState({ error: "Recipe Retrieval Failed! Our gourmet chefs are whipping up something extraordinary in the kitchen, but it seems they couldn't find the secret ingredient for your requested meal. Please give them a moment to work their magic, and they'll serve you a scrumptious dish in no time! Stay hungry, stay hopeful! "});
    });
  }

  getRandomMeal = () => {
    return fetchData()
      .then(data => this.setState({ randomMeal: data }))
      .catch(error => {
        console.log(error);
        this.setState({ error: "Recipe Retrieval Failed! Our gourmet chefs are whipping up something extraordinary in the kitchen, but it seems they couldn't find the secret ingredient for your requested meal. Please give them a moment to work their magic, and they'll serve you a scrumptious dish in no time! Stay hungry, stay hopeful! "});
      });
  }
  
  resetRandomMeal = () => {
    this.getRandomMeal();
  }
  
  render() {
    const {randomMeal, error} = this.state
      return (
        <>
        <Header resetRandomMeal={this.resetRandomMeal} />
          {this.state.error ? (
            <>
              <Error errorMessage={error}/>
            </>) : (
        <div className='App'>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path='/randomMeal'>
              <MealDetail randomMeal={randomMeal.meals} newMeal={this.getRandomMeal} />
            </Route>
            <Route exact path='/shoppingList/:mealId'>
              <ShoppingList randomMeal={randomMeal.meals}/>
            </Route>
            <Route exact path="/error">
              <Error errorMessage={error} location={window.location}/>
            </Route>
            <Route path="*">
              <Redirect to="/error" />
            </Route>
          </Switch>
        </div>
      )}
        </>
      )
    }
  }
    

export default App