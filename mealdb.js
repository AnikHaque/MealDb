const displayMeal = () => {
    const displayFood = document.getElementById('searchFood');
    const displayFoodText = displayFood.value;
    // console.log(displayFoodText);
    displayFood.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${displayFoodText}`
    fetch(url)
     .then(res => res.json())
    .then(data => showMeals(data.meals))
}

const showMeals = hello => {

const showMeal = document.getElementById('show-meal');
console.log(hello);

for (const food of hello){
    // console.log(food)
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div onclick="showDetails(${food.idMeal})" class="card h-100">
    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${food.strMeal}</h5>
      <p class="card-text">${food.strInstructions.slice(0,200)}</p>
    </div>
    <button class=" btn btn-outline-primary w-50 mx-auto mb-4">See Details</button>
  </div>
    `
    showMeal.appendChild(div);
}


}

const showDetails = mealId => {

const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayDetails(data.meals[0]));
 }

 const displayDetails = meal => {

const showFood = document.getElementById('show-detail');
const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div onclick="showDetails(${meal.idMeal})" class="card h-100 w-25 p-2 mx-auto mt-4">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
    </div>
    <button class=" btn btn-outline-primary w-50 mx-auto mb-4">Go To Youtube</button>
  </div>
`
showFood.appendChild(div);

 }