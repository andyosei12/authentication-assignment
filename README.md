# Node.js authentication and authorization

**Kindly run npm install to install the project dependencies**

## Commands to run servers.

2. Run _npm start_ to start server

## Api Endpoints

1. POST /users creates a new user. An apiKey will be assigned after creating a user
2. You are required to provide an api_key header when calling the /inventory endpoint.
3. /inventory gives access to the inventory resource using the various HTTP methods

## User creation

The roles a user can have is either an admin or a user `['admin','user']`  
Currently a random number between 0 and 1 is used for assigning either an admin or user when adding a new user.
