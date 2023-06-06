import React, { Component } from 'react'
import fetchData from '../../ApiCalls';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      randomMeal: '', 
      
    }
  }

    componentDidMount() {
      fetchData()
        .then(data => this.setState({randomMeal: data}))
      }
      
      render() {

    return (
      <div className='App'>
        <Header />
        <Switch >
          
        <HomePage />

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