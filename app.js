const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');

// Search meal and fetch from API
async function searchMeal(e) {
  e.preventDefault();
  // Clear single meal
  single_mealEl.innerHTML = '';

  // Get search term;
  const term = search.value;

  // Check for empty
  if (term.trim()) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
    let res = await fetch(url);
    let data = await res.json();

    resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

    if (data.meals === null) {
      resultHeading.innerHTML = `<p>There are no search results. Please try again!</p>`;
    } else {
      mealsEl.innerHTML = data.meals
        .map(
          (meal) => `
            <div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
                </div>
            </div>
            `
        )
        .join('');
    }
    // Clear search text
    search.value = '';
  } else {
    alert('Please enter a search a term');
  }
}

// Event listeners
submit.addEventListener('submit', searchMeal);
