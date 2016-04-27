'use strict';

const bubbleTea = require('./const_bubbletea');
const get = require('./get-drinks.js');

// Create drink
let createComment = function(callback) {
  // e.preventDefault();
  callback;
  let drinkId = $(this).attr('data-id');
  console.log(drinkId);
  // let formData = new FormData(e.target);

  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/drinks/' + drinkId + '/comments',
    headers: {
      Authorization: 'Token token=' + bubbleTea.bbtApp.user.token,
    },
    method: 'POST',
    contentType: false,
    processData: false,
    data: callback,
  }).done(function(data) {
    console.log(data);
    get.getDrinks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

module.exports = {
  createComment
};
