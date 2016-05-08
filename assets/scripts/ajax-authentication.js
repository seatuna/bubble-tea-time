'use strict';

let bubbleTea = require('./const_bubbletea');

let signUp = function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  $.ajax({
    url: bubbleTea.bbtApp.baseUrl + '/sign-up',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
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
    $('.update-and-delete').show();
    $('.comment-button').show();
    $('.navbar-text').html("Welcome " + data.user.email + "!");
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let changePassword = function(e) {
  e.preventDefault();

  if (!bubbleTea.bbtApp.user) {
    console.error('Wrong user, can\'t change password!');
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
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let signOut = function(e) {
  e.preventDefault();

  if (!bubbleTea.bbtApp.user) {
    console.error('Wrong user, can\'t sign out!');
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
    $('.btn.change-pw').hide();
    $('.btn.sign-out').hide();
    $('.btn.sign-in').show();
    $('.btn.add-drink').hide();
    $('.update-and-delete').hide();
    $('.comment-button').hide();
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
