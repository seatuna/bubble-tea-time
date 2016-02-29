'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

let ajaxAuth = require('./ajax-authentication');
let ajaxDrinks = require('./ajax-drinks');

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
$('#add-drink').on('submit', ajaxDrinks.createDrink);

$(document).ready(function(){
  getDrinks();
  $('.btn.change-pw').hide();
  $('.btn.sign-out').hide();
  $('.btn.add-drink').hide();
});
