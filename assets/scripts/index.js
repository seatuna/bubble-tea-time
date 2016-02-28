'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

let displayDrinks = function(response){
  console.log('displayDrinks works');
  let drinks = response.drinks;
  let drinkListing = require('./iterate-drinks.handlebars');
    $('.content').html(drinkListing({drinks
    }));
};

let getDrinks = function(){
  $.ajax({
    url: "http://localhost:3000/drinks",
    method: 'GET',
    dataType: 'json'
  }).done(function(drinks){
    displayDrinks(drinks);
    console.log('getDrinks work');
  });
};

// $('.books').on("click", function() {
//   getBooks();
// });

const bubbleTea = {
  baseUrl: 'http://localhost:3000'
};

$('#sign-in').on('submit', function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: bubbleTea.baseUrl + '/sign-in',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    bubbleTea.user = data.user;
    $('.btn.sign-in').hide();
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
});

$(document).ready(function(){
  getDrinks();

});
