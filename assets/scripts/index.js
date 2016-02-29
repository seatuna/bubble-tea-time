'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

let ajaxAuth = require('./ajax-authentication');
let ajaxDrinks = require('./ajax-drinks');
// let drinksHandlebars = require('./iterate-drinks.handlebars');

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
    console.log(drinks);
    console.log('getDrinks work');
  });
};

// Click on Kung Fu Tea button to get only KFT drinks
let displayKftDrinks = function(response){
  console.log('displayKftDrinks works');
  let drinks = response.store.drinks;
  let drinkListing = require('./iterate-drinks.handlebars');
    $('.content').html(drinkListing({drinks
    }));
};

let getKftDrinks = function(){
  $.ajax({
    url: "http://localhost:3000/stores/1",
    method: 'GET',
    dataType: 'json'
  }).done(function(drinks){
    displayKftDrinks(drinks);
    console.log('getKftDrinks work');
  });
};



// Click on Chatime button to get only Chatime displayKftDrinks
let displayChatimeDrinks = function(response){
  console.log('displayChatimeDrinks works');
  let drinks = response.store.drinks;
  let drinkListing = require('./iterate-drinks.handlebars');
    $('.content').html(drinkListing({drinks
    }));
};

let getChatimeDrinks = function(){
  $.ajax({
    url: "http://localhost:3000/stores/2",
    method: 'GET',
    dataType: 'json'
  }).done(function(drinks){
    displayChatimeDrinks(drinks);
    console.log('getChatimeDrinks work');
  });
};

// Click on Teado button to get only Teado displayKftDrinks
let displayTeadoDrinks = function(response){
  console.log('displayTeadoDrinks works');
  let drinks = response.store.drinks;
  let drinkListing = require('./iterate-drinks.handlebars');
    $('.content').html(drinkListing({drinks
    }));
};

let getTeadoDrinks = function(){
  $.ajax({
    url: "http://localhost:3000/stores/3",
    method: 'GET',
    dataType: 'json'
  }).done(function(drinks){
    displayTeadoDrinks(drinks);
    console.log('getTeadoDrinks work');
  });
};

// Event handlers for GET drinks

$('.btn.stores.kft').on('click', function() {
  getKftDrinks();
});

$('.btn.stores.chatime').on('click', function() {
  getChatimeDrinks();
});

$('.btn.stores.teado').on('click', function() {
  getTeadoDrinks();
});

$('.btn.stores.all').on('click', function() {
  getDrinks();
});

// Event handlers for authentication

$('#sign-in').on('submit', ajaxAuth.signIn);
$('#change-password').on('submit', ajaxAuth.changePassword);
$('#sign-out').on('click', ajaxAuth.signOut);

// Event handlers for drinks
// Add drink
$('#add-drink').on('submit', ajaxDrinks.createDrink);

// Update drink, must get container div to get to the update button in handlebars
$('.content').on('click', '.update-drink', ajaxDrinks.getDrinkId);
$('#update-drink').on('submit', function(e) {
  ajaxDrinks.updateDrink(e, ajaxDrinks.drinkId);
});

// Delete drink
$('.content').on('click', '.delete-drink', ajaxDrinks.deleteDrink);
// $('#delete-drink').on('submit', function(e) {
//   ajaxDrinks.deleteDrink(e, ajaxDrinks.drinkId);
// });

$(document).ready(function(){
  getDrinks();
  $('.btn.change-pw').hide();
  $('.btn.sign-out').hide();
  $('.btn.add-drink').hide();
});
