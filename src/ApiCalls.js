
const fetchData = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  if (!response.ok) {
    throw new Error()
  }
  return await response.json()
}

export default fetchData