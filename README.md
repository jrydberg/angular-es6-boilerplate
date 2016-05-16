# Angular boilerplate with ES6 support

A simple JSON feed reader.


## Dependencies

1. Install Node.js:
    * Download: https://nodejs.org/en/
    * Or, better, via nvm: https://github.com/creationix/nvm
2. Install packages in root folder of the app: `npm i`


## Run the development server

Just run the default gulp task:

    # `gulp`

This will transpile and copy the development files from `src` to `build`. The
app is then available on localhost, port 4242

http://localhost:4242


## Development rationale

* The goal was to keep the list of dependencies and gulp tasks low, while still
  trying to keep useful functionality. I did not use a
  ngAnnotate/minification/uglification workflow for example. On the other hand
  jshint is useful even for this small app.
* The gulp copy tasks are kept as simple as possible, in a real app that should
  be elaborated, for example in a `gulp-usemin` workflow.
* I use browserify/babelify to transpile from ES2015, as it keeps the tasks
  in gulp small and readable. Source maps provide info for debugging.
* In my Angular apps I normally use one directory for each "site section", or
  "site components" (not Angular `component` in this case)
  (https://scotch.io/tutorials/angularjs-best-practices-directory-structure).
  In this case I see the RSS viewer as one section, so the code for this
  part is in one folder, in the `components` folder.
* I use one Angular component to display the entries and
  one service to load the entries. A simple model provides access to the data.
  The model also stores the info about which post is a favorite post.
 * When data is loaded I use promises.
 * Error handling is missing.
 * As development web server I use `gulp-connect` with live reload.
