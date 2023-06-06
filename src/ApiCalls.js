// const fetchRandomMeal = async () => {
//   const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  
//   if (response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     throw new Error("Please try again");
//   }
// };

// export default fetchRandomMeal;


const fetchData = () => {
  return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => {
    if(!response.ok) {
      throw new Error()
    }
    
    return response.json()
  })
}

export default fetchData