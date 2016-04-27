'use strict';

let bubbleTea = require('./const_bubbletea.js');

let displayDrinks = function(response){
  console.log('displayDrinks works');
  let drinks = response.drinks;
  let drinkListing = require('./iterate-drinks.handlebars');
    $('.content').html(drinkListing({drinks
    }));
    $('#comment-textarea').val();
};

let getDrinks = function(){
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/drinks',
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
    url: bubbleTea.bbtApp.baseUrl + '/stores/1',
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
    url: bubbleTea.bbtApp.baseUrl + '/stores/2',
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
    url: bubbleTea.bbtApp.baseUrl + '/stores/3',
    method: 'GET',
    dataType: 'json'
  }).done(function(drinks){
    displayTeadoDrinks(drinks);
    console.log('getTeadoDrinks work');
  });
};

module.exports = {
  getDrinks,
  getKftDrinks,
  getChatimeDrinks,
  getTeadoDrinks
};
