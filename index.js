'use strict';
const STORE = {
    userNumber: 0,
    dogArray: [],
}

function watchForm() {
    $('form').on('submit', event => {
      event.preventDefault();
      if ($('.user-number').val() > 50) {
          return alert('Please choose a valid number')
      }else {
          STORE.userNumber = $('.userNumber').val();
          console.log(STORE.userNumber);
          getDogImage(STORE.userNumber);
    }
  })
}


function getDogImage(number) {
  fetch(`https://dog.ceo/api/breeds/image/random/${STORE.userNumber}`)
    .then(response => response.json())
    .then(jsonObj => 
      displayResults(jsonObj))
    .catch(error => alert('Something happened! Try again'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}



$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
}); 