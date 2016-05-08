'use strict';

let bubbleTea = require('./const_bubbletea.js');

let showButtons = function() {
  if(bubbleTea.bbtApp.user) {
    $('.update-and-delete').show();
    $('.comment-button').show();
  }
};

let displayDrinks = function(response){
  let drinks = response.drinks;
  let drinkListing = require('./iterate-drinks.handlebars');
    $('.content').html(drinkListing({drinks
    }));
};

let getDrinks = function(){
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/drinks',
    method: 'GET',
    dataType: 'json'
  }).done(function(drinks){
    displayDrinks(drinks);
    showButtons();
  });
};

// Click on Kung Fu Tea button to get only KFT drinks
let displayKftDrinks = function(response){
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
    showButtons();
  });
};



// Click on Chatime button to get only Chatime displayKftDrinks
let displayChatimeDrinks = function(response){
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
    showButtons();
  });
};

// Click on Teado button to get only Teado displayKftDrinks
let displayTeadoDrinks = function(response){
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
    showButtons();
  });
};

module.exports = {
  getDrinks,
  getKftDrinks,
  getChatimeDrinks,
  getTeadoDrinks
};
