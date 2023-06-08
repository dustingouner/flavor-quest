import React, { Component } from 'react';
import './ShoppingList.css';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientItems: [],
    };
  }

  componentDidMount() {
    this.getIngredientList();
  }

  getIngredientList = () => {
    const { randomMeal } = this.props;
    const ingredientItems = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measurementKey = `strMeasure${i}`;

      const ingredient = randomMeal[0][ingredientKey];
      const measurement = randomMeal[0][measurementKey];

      if (ingredient && measurement) {
        const ingredientMeasurement = `${ingredient} - ${measurement}`;
        ingredientItems.push({ ingredientMeasurement, purchased: false });
      }
    }

    this.setState({ ingredientItems });
  };

  handleCheckboxChange = (index) => {
    this.setState((prevState) => {
      const updatedIngredientItems = [...prevState.ingredientItems];
      updatedIngredientItems[index].purchased = !updatedIngredientItems[index].purchased;
      return { ingredientItems: updatedIngredientItems };
    });
  };

  render() {
    const { ingredientItems } = this.state;

    return (
      <div>
        <h2 className='title'>Ingredients</h2>
        <ul>
          {ingredientItems.map((ingredientItem, index) => (
            <li key={index} className='list'>
              <label>
                <input
                  type="checkbox"
                  checked={ingredientItem.purchased}
                  onChange={() => this.handleCheckboxChange(index)}
                />
                {ingredientItem.ingredientMeasurement}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;