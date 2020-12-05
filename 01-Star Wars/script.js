
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
//const url = "https://starwars.egghead.training/";
​
// function starWars(endpoint){
//   const url='https://starwars.egghead.training/'+ endpoint;
//  const handleSuccess = response => {
//     if(response.ok){
//       return response.json();
//     } 
//   throw new Error('Request failed');
//   }
​
//   const handleFailure = networkError => {
//     console.log(networkError.message)
//   }
​
//   const handleJsonResponse = jsonResponse => {
//     console.log(`There are ${jsonResponse.length} planets in Starwars history`);
  
//   jsonResponse.forEach((item) => {
// console.log(`Film episode_ ${item.episode_id} title is ${item.title}`);
//  });
//   }
​
//   fetch(url).then(handleSuccess, handleFailure).then(handleJsonResponse);
// }
// starWars('films');
​
 function starWarsCount(endpoint) {
  const url='https://starwars.egghead.training/'+ endpoint;
​
 return fetch(url).then(response => {
  if(response.ok){
     return response.json();
} 
   throw new Error('Request failed');
  });
}
// starWarsCount('films').then(resolved => {
​
//   console.log(resolved);
// }).catch(err =>{
//   console.log(err)
// });
​
const allPromises = Promise.all([starWarsCount('planets'), starWarsCount('people')]);
allPromises.then((data) => {
  console.log(data);
output.innerText = `There are ${data[0].length} planets ` + `${data[1].length} people.`
​
}).catch((err)=>{
  console.log(err);
}).finally (
  console.log(`Well done DEV ladies, Project has been finished.`));
​
​
// const displaySuggestions = (event) => {
//   event.preventDefault();
//   while(responseField.firstChild){
//     responseField.removeChild(responseField.firstChild);
//   }
//   getSuggestions();
// };
​
// submit.addEventListener('click', displaySuggestions);