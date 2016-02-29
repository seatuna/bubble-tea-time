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

$('.btn.kft').on('click', function() {
  getKftDrinks();
});

$('.btn.chatime').on('click', function() {
  getChatimeDrinks();
});

$('.btn.teado').on('click', function() {
  getTeadoDrinks();
});


// LOGIN AJAX STUFF HERE, EVENTUALLY WILL BE MOVED TO ANOTHER FILE

const bubbleTea = {
  baseUrl: 'http://localhost:3000'
};

let signIn = function(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  $.ajax({
    url: bubbleTea.baseUrl + '/sign-in',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    bubbleTea.user = data.user;
    $('.btn.sign-in').hide();
    $('.btn.change-pw').show();
    $('.btn.sign-out').show();
    $('.btn.add-drink').show();
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let changePassword = function(e) {
  e.preventDefault();

  if (!bubbleTea.user) {
    console.error('Wrong!');
    return;
  }

  let formData = new FormData(e.target);
  $.ajax({
    url: bubbleTea.baseUrl + '/change-password/' + bubbleTea.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + bubbleTea.user.token,
    },
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
    console.log('change pw worked');
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let signOut = function(e) {
  e.preventDefault();

  if (!bubbleTea.user) {
    console.error('Wrong!');
    return;
  }

  $.ajax({
    url: bubbleTea.baseUrl + '/sign-out/' + bubbleTea.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + bubbleTea.user.token,
    },
  }).done(function(data) {
    console.log(data);
    console.log('logged out');
    $('.btn.change-pw').hide();
    $('.btn.sign-out').hide();
    $('.btn.sign-in').show();
    $('.btn.add-drink').hide();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

// Event handlers for authentication

$('#sign-in').on('submit', signIn);
$('#change-password').on('submit', changePassword);
$('#sign-out').on('click', signOut);

$(document).ready(function(){
  getDrinks();
  $('.btn.change-pw').hide();
  $('.btn.sign-out').hide();
  $('.btn.add-drink').hide();
});
