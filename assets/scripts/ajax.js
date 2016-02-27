'use strict';

const bubbleTea = {
  baseUrl: 'http://localhost:3000'
};


  // Create drink
let createDrink = function() {
    $.ajax({
      url: bubbleTea.baseUrl + '/stores',
      // url: 'http://httpbin.org/post',
      headers: {
        Authorization: 'Token token=' + bubbleTea.user.token,
      },
      method: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(),
    }).done(function(data) {
      bubbleTea.game = data.game;
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
};

// Save game state

let saveGame = function (player, index) {
  $.ajax({
    url: bubbleTea.baseUrl + '/games/' + bubbleTea.user.id,
    // url: 'http://httpbin.org/post',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + bubbleTea.user.token,
    },
    contentType: false,
    processData: false,
    data: {
  "game": {
    "cell": {
      "index": index,
      "value": player,
    },
    "over": false
  }
}
  }).done(function(data) {
    bubbleTea.game = data.game;
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

  // Sign up
  $('#sign-up').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: bubbleTea.baseUrl + '/sign-up',
      // url: 'http://httpbin.org/post',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

  // Sign in
  $('#sign-in').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: bubbleTea.baseUrl + '/sign-in',
      // url: 'http://httpbin.org/post',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      bubbleTea.user = data.user; // adds data to bubbleTea object
      createGame();
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


$(document).ready(() => {

  // Create game state
let createGame = function() {
    $.ajax({
      url: bubbleTea.baseUrl + '/games',
      // url: 'http://httpbin.org/post',
      headers: {
        Authorization: 'Token token=' + bubbleTea.user.token,
      },
      method: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(),
    }).done(function(data) {
      bubbleTea.game = data.game;
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
};

// Save game state

let saveGame = function (player, index) {
  $.ajax({
    url: bubbleTea.baseUrl + '/games/' + bubbleTea.user.id,
    // url: 'http://httpbin.org/post',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + bubbleTea.user.token,
    },
    contentType: false,
    processData: false,
    data: {
  "game": {
    "cell": {
      "index": index,
      "value": player,
    },
    "over": false
  }
}
  }).done(function(data) {
    bubbleTea.game = data.game;
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
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
      createGame();
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

});

module.exports = {
  createGame,
  saveGame
};
