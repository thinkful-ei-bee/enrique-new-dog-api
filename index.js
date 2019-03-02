'use strict';


const STORE = {
    userNumber: 0,
    dogArray: [],
}

function watchForm() {
    $('form').on('submit', event => {
      event.preventDefault();
      if ($('.user-number').val() > 50) {
          return alert('Please choose a valid number');
      }else {
          STORE.userNumber = $('.user-number').val();
          console.log(STORE.userNumber);
          getDogImages(STORE.userNumber);
    }
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


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
}); 