'use strict';

let bubbleTea = require('./const_bubbletea');

let signUp = function(e) {
  console.log('sign up button works');
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/sign-up',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log('New user created!');
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let signIn = function(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/sign-in',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    bubbleTea.bbtApp.user = data.user;
    $('.btn.sign-in').hide();
    $('.btn.change-pw').show();
    $('.btn.sign-out').show();
    $('.btn.add-drink').show();
    console.log('signed in');
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let changePassword = function(e) {
  e.preventDefault();

  if (!bubbleTea.bbtApp.user) {
    console.error('Wrong!');
    return;
  }

  let formData = new FormData(e.target);
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/change-password/' + bubbleTea.bbtApp.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + bubbleTea.bbtApp.user.token,
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

  if (!bubbleTea.bbtApp.user) {
    console.error('Wrong!');
    return;
  }

  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/sign-out/' + bubbleTea.bbtApp.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + bubbleTea.bbtApp.user.token,
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

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
};
