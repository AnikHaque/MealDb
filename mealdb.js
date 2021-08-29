const displayMeal = () => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=$(meals)"
fetch(url)
.then(res => res.json())
.then(data => console.log(data.meals))
}