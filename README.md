# Bubble Tea Time:  Front-End

Note: The API and database for this project was originally hosted on Heroku's free tier which is sadly no longer available. Unfortunately, that means the Bubble Tea Time app is no longer fully functional.

[Bubble Tea Time](http://seatuna.github.io/bubble-tea-time/index.html)

[Bubble Tea API](https://github.com/seatuna/bubble-tea-api) is the back-end for this web app.

This web app allows users to view drink menus from Boston-area bubble tea shops.
These items display information about the main ingredients of the drink,
toppings, and other information pertinent to the user’s bubble tea experience.
Most of the time, drink names at these bubble tea shops are not intuitive
(unless you can read Chinese).  For example, Kung Fu Tea has a drink called
“Red Wow Milk,” what is that!?  And a lot of people don’t realize that you don’t
have to get tapioca in your tea, there’s other stuff you can put in it (like
aloe, or coconut jelly)!  My app will help demystify the wonderful world of this
in-aptly named but much beloved Taiwanese beverage.

## Wireframe

[Initial wireframe](https://drive.google.com/file/d/0B35knKRAJGV0QkVORTZBRy02MXM/view?usp=sharing)

[Entity Relationship Diagrams](https://drive.google.com/file/d/0B35knKRAJGV0eTE4b1F6d0dGdGc/view?usp=sharing)

## User Story

Not logged in:
* User can click on a ‘store name’ button to toggle menus
* User can view drink details which include main ingredients, toppings, and
additional information (for example, in taro milk tea, what is taro?)
* User can scroll down on the page to view more items
* User can click on the 'sign up' to create an account, which defaults to
non-admin status
* User can click on the 'sign in’ button to sign in using an email and password

Logged in as admin:
* Admin can do everything a non-admin can do
* Admin can click on an add drink button to create a new drink using a form
* Admin can click on an update button in drink details to access a form for
editing a posted item
* Admin can click on a delete button in drink details to delete a posted item
* Admin can change password by clicking on a change password button and entering
their old and new password
* Admin can click on a logout button to logout from the options menu

Logged in as non-admin:
* User can do everything a non-admin can do
* User can change password
* Create comments

## Tools

This web app was created using the following:
* Ruby on Rails
* HTML / CSS / SASS
* Bootstrap
* Handlebars.js

## Additions since initial presentation

As of May, the issue with update and delete buttons showing up when not logged
in has been resolved.  Adding comments to a drink has also been added as a new
feature.
