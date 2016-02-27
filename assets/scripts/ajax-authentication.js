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

  // Sign in
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
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

  // Change password
  $('#change-password').on('submit', function(e) {
    e.preventDefault();

    if (!bubbleTea.user) {
      console.error('Wrong!');
      return;
    }

    var formData = new FormData(e.target);

    $.ajax({
      url: bubbleTea.baseUrl + '/change-password/' + bubbleTea.user.id,
      // url: 'http://httpbin.org/post',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + bubbleTea.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
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
      // url: 'http://httpbin.org/post',
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + bubbleTea.user.token,
      },
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

module.exports = {

};
