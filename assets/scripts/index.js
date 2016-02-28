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

// $('.books').on("click", function() {
//   getBooks();
// });

const bubbleTea = {
  baseUrl: 'http://localhost:3000'
};

$('#sign-in').on('submit', function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
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
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
});

$('#change-password').on('submit', function(e) {
  e.preventDefault();

  if (!bubbleTea.user) {
    console.error('Wrong!');
    return;
  }

  var formData = new FormData(e.target);

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
});

// Sign out
$('#sign-out').on('click', function(e) {
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
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
});

$(document).ready(function(){
  getDrinks();
  $('.btn.change-pw').hide();
  $('.btn.sign-out').hide();
});
