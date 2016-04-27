'use strict';

let bubbleTea = require('./const_bubbletea');
let get = require('./get-drinks.js');

// Create drink
let createDrink = function(e) {
  let $store_id = $("input[name='drinks[store_id]']").val();
  let formData = new FormData(e.target);
  e.preventDefault();

  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/stores/' + $store_id + '/drinks',
    headers: {
      Authorization: 'Token token=' + bubbleTea.bbtApp.user.token,
    },
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
    get.getDrinks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

// Update drink
let drinkId;
let getDrinkId = function(e) {
  drinkId = $(e.target).attr('data-id');
};

let updateDrink = function(e) {
  e.preventDefault();
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/drinks/' + drinkId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + bubbleTea.bbtApp.user.token,
    },
    contentType: false,
    processData: false,
    data: new FormData(e.target)
  }).done(function(data) {
    console.log(data);
    get.getDrinks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let deleteDrink = function(e) {
  e.preventDefault();

  if (!bubbleTea.bbtApp.user) {
    console.error('Can\'t delete!');
    return;
  }

  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/drinks/' + $(e.target).attr('data-id'),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + bubbleTea.bbtApp.user.token,
    },
  }).done(function(data) {
    console.log(data);
    get.getDrinks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

// Create Comment

let createComment = function(e) {
  e.preventDefault();
  let formData = new FormData(e.target);

  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/drinks/' + drinkId + '/comments',
    headers: {
      Authorization: 'Token token=' + bubbleTea.bbtApp.user.token,
    },
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
    get.getDrinks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

// Populate update modal with text
let fillUpdate = function(response) {
  let drink = response.drink;
  $('#update-name').val(drink.name);
  $('#update-ingredients').val(drink.ingredients);
  $('#update-toppings').val(drink.toppings);
  $('#update-notes').val(drink.notes);
  $('#update-store').val(drink.store_id);
};

$(document).on('click','.update-drink', function(){
  $('#updateDrink').modal('show');
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/drinks/' + drinkId,
    method: 'GET',
    dataType: 'json'
  }).done(function(drink){
    fillUpdate(drink);
  });
});

module.exports = {
  createDrink,
  updateDrink,
  getDrinkId,
  deleteDrink,
  createComment
};
