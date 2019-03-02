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
    .then(jsonObj => makeDogArray(jsonObj)).then(displayResults)
    .catch(error => alert('Something happened! Try again.'));
}

function makeDogArray(jsonObj){
    STORE.dogArray = jsonObj.message;
    // console.log (STORE.dogArray);    
}


function displayResults() {
console.log('getting to here')
  $('.results').replaceWith(makeHtml());
}

function makeHtml(){
    return STORE.dogArray.map(i => `<img src="${i}" class="results">` );
//     let newArr=[];
//     for(let x = 0; x < STORE.dogArray.length; x++){
//         newArr.push(`<img src="${STORE.dogArray[x]}" class="results">`)
// }
//    return newArr;
} 


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
}); 