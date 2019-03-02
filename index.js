'use strict';


const STORE = {
    userNumber: 0,
    dogArray: [],
    breedSearch: [],

}

function handleNumberSubmit() {
    $('form').submit('user-number', event => {
      event.preventDefault();
      if ($('.user-number').val()=== ''){
         $('.user-number').val(3);
     }
      if ($('.user-number').val() > 50 || $('.user-number').val() < 1) {
          return alert('Please choose a valid number');
      } 
          STORE.userNumber = $('.user-number').val();
          console.log(STORE.userNumber);
          getDogImages(STORE.userNumber);
    
  })
}


function getDogImages(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(jsonObj => displayResults(jsonObj))
    .catch(error => alert('Something happened! Try again.'));
}

function displayResults(x) {
STORE.dogArray = x.message;
  $('.results').replaceWith(makeHtml());
}

function makeHtml(){
    return STORE.dogArray.map(i => `<img src="${i}" class="results">` );
} 

// function handleBreedSubmit(){
//   $('form').submit('.breed-search', event =>{
//     event.preventDefault();
//     STORE.breedSearch = $('.breed-search').val();
//     console.log(STORE.breedSearch);
//   })
// }


$(function() {
  console.log('App loaded! Waiting for submit!');
  handleNumberSubmit();
  // handleBreedSubmit();
}); 