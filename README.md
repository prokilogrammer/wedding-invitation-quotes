# wedding-invitation-quotes
Website to display creative Indian wedding invitation quotes 

# Installation
Assume you have Node v4.3.0 installed. Use https://github.com/creationix/nvm if you don't already have this version of Node installed

1. `git clone` the repository
2. `npm install`
3. `node app.js` to run node server
4. Use `gulp dev` when developing. It will watch for file changes and restart the server

# What is where

- `$ROOT/db.js` contains database access layer
- `$ROOT/routes.js` contains the routes
- `$ROOT/sql` contains all tables and stored procedures
- `$ROOT/www` contains source of client-side code - HTML, CSS and JS
- `$ROOT/www/css` contains CSS written in SASS (http://sass-lang.com/). It makes writing CSS a pleasure. Run `gulp build` to convert SASS to CSS. `gulp dev` will run the `build` automatically
- `$ROOT/www/js` contains your Javascript
- `$ROOT/www/static` is where we output concatenated and minified CSS and Javascript for clients to use



