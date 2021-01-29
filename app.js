const search=document.getElementById('search');
const submit=document.getElementById('submit');
const random=document.getElementById('random');
const mealss=document.getElementById('meals');
const single_meal=document.querySelector('#single-meal');
const result=document.querySelector('#result-heading');





// // search meal and fetch from api
// function searchMeal(e)
// {
 
//  e.preventDefault();
//   // clear single meal
//   single_meal.innerHTML='';

//   // get search term
//   const term=search.value;

//   // check for empty
//   if(term.trim()) {
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
//     .then((res)=>{
//        return res.json()
//     })
//     .then((data)=>{
//       console.log(data)
//      result.innerHTML=`
//      <h2>search results for '${term}':</h2>`;

//      if(data.meals === null)
//      {
//          result.innerHTML =`there are no search results . Try again!`
//      }else {
//         mealss.innerHTML=data.meals.map(meal =>
//            `<div class="meal">
//            <img src="${meal.strMealThumb}"/>
//            <div class="meal-info data-mealID="${meal.idMeal}">
//            <h3>${meal.strMeal}</h3>
//            </div>
//            </div>`
//         ).join('');
//      }
//     });

//     // clear search text

//     search.value='';

//   } else {
//     alert('please enter a search value')
//   }

 
// }


// // event listens

// submit.addEventListener('submit',searchMeal);

 
function searchMeal(e) {
  e.preventDefault();
  // clear single meal
  single_meal.innerHTML = '';
  // get search term
  const term = search.value;
  // check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        result.innerHTML = `<h2>Search results for '${term}'</h2>`;
 
        if (data.meals === null) {
          result.innerHTML = `<p>There are no search reults for ${term}. Try a different search</p>`
        } else {
          mealss.innerHTML = data.meals.map(meal =>
            `<div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
              <div class="meal-info data-mealID=${meal.idMeal}">
              <h3>${meal.strMeal}</h3>
              </div>
            </div>`)
            .join('');
        }
      })
    // clear search text
    search.value = '';
  } else {
    alert('enter a search term')
  }
}
submit.addEventListener('submit', searchMeal);