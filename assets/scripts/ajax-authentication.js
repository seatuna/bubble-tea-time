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

module.exports = {

};
