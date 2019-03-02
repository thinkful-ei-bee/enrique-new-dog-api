'use strict';


const STORE = {
    userNumber: 0,
    dogArray: [],
    breedSearch: [],
    breedArray: []

}

function handleNumberSubmit() {
    $('#js-number-entry').submit('.user-number', event => {
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
    .then(jsonObj => displayNumber(jsonObj))
    .catch(error => alert('Something happened! Try again.'));
}

function displayNumber(x) {
STORE.dogArray = x.message;
  $('.results').replaceWith(makeHtml(STORE.dogArray));
}

function makeHtml(arr){
    return arr.map(i => `<img src="${i}" class="results">` );
} 

function handleBreedSubmit(){
  $('#js-breed-entry').submit('.breed-search', event =>{
    event.preventDefault();
    STORE.breedSearch = $('.breed-search').val();
    console.log(STORE.breedSearch);
    getDogBreed(STORE.breedSearch);
  })
}
function getDogBreed(breed){
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => response.json())
      .then(jsonObj => displayBreed(jsonObj))
      .catch(error => alert('Something happened! Try again some other time.'));
}
function displayBreed(x){
  STORE.breedArray = x.message[0];
  console.log(STORE.breedArray);
  $('.results').replaceWith(`<img src="${STORE.breedArray}" class="results">`);

}

$(function() {
  console.log('App loaded! Waiting for submit!');
  handleNumberSubmit();
  handleBreedSubmit();
}); 