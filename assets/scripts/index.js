'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

let ajaxAuth = require('./ajax-authentication');
let ajaxDrinks = require('./ajax-drinks');
let get = require('./get-drinks.js');

// Event handlers for GET drinks

$('.btn.stores.kft').on('click', function() {
  get.getKftDrinks();
});

$('.btn.stores.chatime').on('click', function() {
  get.getChatimeDrinks();
});

$('.btn.stores.teado').on('click', function() {
  get.getTeadoDrinks();
});

$('.btn.stores.all').on('click', function() {
  get.getDrinks();
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

$(document).ready(function(){
  get.getDrinks();
  $('.btn.change-pw').hide();
  $('.btn.sign-out').hide();
  $('.btn.add-drink').hide();
});
