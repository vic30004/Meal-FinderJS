const search = document.getElementById('search'),
submit=document.getElementById('submit'),
random = document.getElementById('random'),
mealsEl= document.getElementById('meals'),
resultHeading =document.getElementById('result-heading'),
single_mealEl = document.getElementById('single-meal');

// Search meal and fetch from API
async function searchMeal(e){
    e.preventDefault();
    // Clear single meal
    single_mealEl.innerHTML='';

    // Get search term;
    const term = search.value;

    // Check for empty
    if(term.trim()){
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
        let res = await fetch(url)
        let data = await res.json();
        console.log(data)
    }else{
        alert('Please enter a search a term')
    }
}


// Event listeners
submit.addEventListener('submit',searchMeal)