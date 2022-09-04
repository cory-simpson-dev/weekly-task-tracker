# Weekly Task Tracker

Full-stack web application with user login for tracking daily completion of tasks in a week.

[LIVE APP](https://weekly-task-tracker.herokuapp.com/ "Weekly Task Tracker")

## Features

Within this weekly task tracker, you can create an account, create tasks you'd like to track, customize your account settings, save favorite tasks, and, of course, logout. 

## Packages

This node.js application primarily utilizes ejs for templating, express for server framework, mongoDB and mongoose for database storage, passport-local for accounts and authentication, bcrypt for password encryption, materialize as a css framework, and several others for other details (listed in package.json).

## Changelog

09/04/2022:

- improved UX/UI

09/03/2022:

- improved task status UX

09/01/2022:

- updated task submission (min char = 3, max = 20)
- added task submission styles

08/23/2022:

- added hover styles

08/22/2022:

- added favicon

08/21/2022:

- improved favorites UX

08/20/2022:

- improved all status clear UX

08/19/2022:

- site launch via heroku
- improved delete UX
- improved preferred icons UX
- improved status update UX

08/18/2022:

- added reset features
- add task creation from favorites

08/17/2022:

- added footer styles
- added favorite tasks

08/16/2022:

- added logout feature
- added login and signup styles
- removed index route & controller

08/15/2022:

- added user settings sidenav
- added user-preferred task completion icons
- added footer partial
- removed fontawesome

08/13/2022:

- added error views (404 & 500)
- added public folder (with css/js)
- added task display, status updates, task delete

08/11/2022:

- initial build