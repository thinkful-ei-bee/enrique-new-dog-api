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
      ($('.user-number').val()=== '') ? $('.user-number').val(3):
      ($('.user-number').val() > 50 || $('.user-number').val() < 1) ? alert('Please choose a valid number') :
      STORE.userNumber = $('.user-number').val();
      getDogImages(STORE.userNumber);
  })
}
// ************* Number functions **************** //

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


// ************* Breed functions **************** //

function handleBreedSubmit(){
  $('#js-breed-entry').submit('.breed-search', event =>{
    event.preventDefault();
    STORE.breedSearch = $('.breed-search').val();
    getDogBreed(STORE.breedSearch);
  })
}
function getDogBreed(breed){
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response =>  response.json())
      .then(jsonObj => displayBreed(jsonObj))
      .catch(error => alert('Something happened! Try again some other time.'));
}
function displayBreed(x){
  (x.status === "error") ? alert(`${x.message}. Please try again`): 
  STORE.breedArray = x.message[15];
  $('.results').replaceWith(`<img src="${STORE.breedArray}" class="results">`);
}

// ************* doc ready functions **************** //
$(function() {
  console.log('App loaded! Waiting for submit!');
  handleNumberSubmit();
  handleBreedSubmit();
}); 