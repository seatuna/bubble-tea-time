'use strict';

let bubbleTea = require('./const_bubbletea');

// const bubbleTea = {
//   baseUrl: 'http://localhost:3000'
// };


// let $store_id = $("input[name='drink[store_id]']").val();


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

let updateDrink = function (e, i) {
  e.preventDefault();

  console.log('update drink button works');
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/drinks/' + i,
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
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

//   // Sign up
//   $('#sign-up').on('submit', function(e) {
//     e.preventDefault();
//     var formData = new FormData(e.target);
//     $.ajax({
//       url: bubbleTea.baseUrl + '/sign-up',
//       // url: 'http://httpbin.org/post',
//       method: 'POST',
//       contentType: false,
//       processData: false,
//       data: formData,
//     }).done(function(data) {
//       console.log(data);
//     }).fail(function(jqxhr) {
//       console.error(jqxhr);
//     });
//   });
//
//   // Sign in
//   $('#sign-in').on('submit', function(e) {
//     e.preventDefault();
//     var formData = new FormData(e.target);
//     $.ajax({
//       url: bubbleTea.baseUrl + '/sign-in',
//       // url: 'http://httpbin.org/post',
//       method: 'POST',
//       contentType: false,
//       processData: false,
//       data: formData,
//     }).done(function(data) {
//       bubbleTea.user = data.user; // adds data to bubbleTea object
//       console.log(data);
//     }).fail(function(jqxhr) {
//       console.error(jqxhr);
//     });
//   });
//
//   // Change password
//   $('#change-password').on('submit', function(e) {
//     e.preventDefault();
//
//     if (!bubbleTea.user) {
//       console.error('Wrong!');
//       return;
//     }
//
//     var formData = new FormData(e.target);
//
//     $.ajax({
//       url: bubbleTea.baseUrl + '/change-password/' + bubbleTea.user.id,
//       // url: 'http://httpbin.org/post',
//       method: 'PATCH',
//       headers: {
//         Authorization: 'Token token=' + bubbleTea.user.token,
//       },
//       contentType: false,
//       processData: false,
//       data: formData,
//     }).done(function(data) {
//       console.log(data);
//     }).fail(function(jqxhr) {
//       console.error(jqxhr);
//     });
//   });
//
//   // Sign out
//   $('#sign-out').on('click', function(e) {
//     e.preventDefault();
//
//     if (!bubbleTea.user) {
//       console.error('Wrong!');
//       return;
//     }
//
//     $.ajax({
//       url: bubbleTea.baseUrl + '/sign-out/' + bubbleTea.user.id,
//       // url: 'http://httpbin.org/post',
//       method: 'DELETE',
//       headers: {
//         Authorization: 'Token token=' + bubbleTea.user.token,
//       },
//     }).done(function(data) {
//       console.log(data);
//     }).fail(function(jqxhr) {
//       console.error(jqxhr);
//     });
//   });


$(document).ready(() => {

});

module.exports = {
  createDrink,
  updateDrink,
  getDrinkId
};
