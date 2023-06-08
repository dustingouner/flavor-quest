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
        // this.setState({ randomMeal: []}, () => {
          this.getRandomMeal()
        // })
      }
  

      
      render() {

        console.log('line 39-randomMeal', this.state.randomMeal)
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












// class App extends Component {
//   state = {
//     randomMeal: {}
//   }

//   async componentDidMount() {
//     try {
//       const data = await fetchRandomMeal();
//       this.setState({ randomMeal: data.meals[0] });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {
//     const { randomMeal } = this.state;
//     console.log(randomMeal.strMeal);

//     return (
//       <div>
//         <h1>{randomMeal.strMeal}</h1>
//       </div>
//     );
//   }
// }

export default App;