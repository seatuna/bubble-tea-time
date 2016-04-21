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

module.exports = {
  createDrink,
  updateDrink,
  getDrinkId,
  deleteDrink
};
