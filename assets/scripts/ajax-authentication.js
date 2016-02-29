'use strict';

const bubbleTea = {
  baseUrl: 'http://localhost:3000'
};

  // Sign up
  // $('#sign-up').on('submit', function(e) {
  //   e.preventDefault();
  //   var formData = new FormData(e.target);
  //   $.ajax({
  //     url: bubbleTea.baseUrl + '/sign-up',
  //     method: 'POST',
  //     contentType: false,
  //     processData: false,
  //     data: formData,
  //   }).done(function(data) {
  //     console.log(data);
  //   }).fail(function(jqxhr) {
  //     console.error(jqxhr);
  //   });
  // });

  let signIn = function(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
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
      $('.btn.add-drink').show();
      console.log('signed in')
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  };

  let changePassword = function(e) {
    e.preventDefault();

    if (!bubbleTea.user) {
      console.error('Wrong!');
      return;
    }

    let formData = new FormData(e.target);
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
  };

  let signOut = function(e) {
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
      $('.btn.add-drink').hide();
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  };

module.exports = {
  signIn,
  changePassword,
  signOut
};
