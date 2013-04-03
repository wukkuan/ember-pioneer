/*
 * Hey! This is an Ember application. It's built using a
 * neuter task (see this project's Gruntfile for what that means).
 *
 * `require`s in this file will be stripped and replaced with
 * the string contents of the file they refer to wrapped in
 * a closure.
 *
 * Each file contains its own commenting, so feel free to crack
 * them open if you want more information about what is going on.
*/

/*
 * These are the dependencies for an Ember application
 * and they have to be loaded before any application code.
*/
require('dependencies/jquery');

/*
 * Since we're precompiling our templates, we only need the
 * handlebars-runtime microlib instead of the
 * entire handlebars library and its string parsing functions.
*/
require('dependencies/handlebars-runtime');

/* This is Ember. I think you'll like it */
require('dependencies/ember');

/*
  this file is generated as part of the build process.
  If you haven't run that yet, you won't see it.

  It is excluded from git commits since it's a
  generated file.
*/
require('dependencies/compiled/templates');

/*
  Creates a new instance of an Ember application and
  specifies what HTML element inside index.html Ember
  should manage for you.
*/
window.Todos = Ember.Application.create({
  rootElement: window.TESTING ? '#qunit-fixture' : '#app'
});

if (window.TESTING) {
  window.Todos.deferReadiness();
}

