'use strict';

let bubbleTea = require('./const_bubbletea');
let get = require('./get-drinks.js');

// Create drink
let createDrink = function(e) {
  let $store_id = $("input[name='drinks[store_id]']").val();
  console.log('add drinks button works');
  let url = bubbleTea.bbtApp.baseUrl + '/stores/' + $store_id + '/drinks';
  console.log(url);
  e.preventDefault();
  let formData = new FormData(e.target);
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
    console.log('Drink created!');
    get.getDrinks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

// Update drink
let drinkId;
let getDrinkId = function(e) {
  drinkId = $(e.target).attr('data-id');
  console.log(drinkId);
};

let updateDrink = function(e) {
  e.preventDefault();
  console.log('update drink button works');
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
    console.log('update drink works');
    console.log(data);
    get.getDrinks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let deleteDrink = function(e) {
  console.log('delete button works');
  e.preventDefault();

  if (!bubbleTea.bbtApp.user) {
    console.error('Wrong!');
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

module.exports = {
  createDrink,
  updateDrink,
  getDrinkId,
  deleteDrink
};
