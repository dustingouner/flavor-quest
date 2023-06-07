import React, { Component } from 'react'
import fetchData from '../../ApiCalls';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import MealDetail from '../MealDetail/MealDetail';
import { Route, Switch } from 'react-router-dom'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      randomMeal: '', 
      
    }
  }

    componentDidMount() {
      this.getRandomMeal()
      }

      getRandomMeal = () => {
        fetchData()
        .then(data => this.setState({ randomMeal: data }))
      }


      resetRandomMeal = () => {
        this.setState({ randomMeal: ''}, () => {
          this.getRandomMeal()
        })
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