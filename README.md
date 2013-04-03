# Ember Pioneer

Starter kit for Ember.js with build tools. Based on [Trek](https://github.com/trek)'s  [ember-todos-with-build-tools-tests-and-other-modern-conveniences](https://github.com/trek/ember-todos-with-build-tools-tests-and-other-modern-conveniences) project.

## Building with this application

Reading [Trek's Ember Todos](https://github.com/trek/ember-todos-with-build-tools-tests-and-other-modern-conveniences) notes is highly recommended. These brief instructions are directly from that project.

You will need node installed as a development dependency. See [node's
site](http://nodejs.org/) for help with that.

One you have node installed run

```shell
npm install -g grunt-cli
```

To install the grunt task execution script available `g`lobally. Depending on how you
installed node on your system, you may need to use `sudo` to run this command.

Next, from this project folder run

```shell 
npm install
```

This will install the development dependencies listed in the `package.json` file
and store them in locally in `node_modules/`. You won't need `sudo` here.
`node_modules` is not tracked by version control.

Once all the development dependencies are installed you can start the
development tasks with

```shell 
grunt
```

Which will build development versions of your application and start watching 
for any changes. See `Gruntfile.js` for a deeper dive into what happens here.

Now you can open `build/index.html` in a browser.

## Changes from Trek's Ember Todos

* Todos specific code is removed.
* Ember.js, Handlebars.js, and jQuery updated to latest version.
* grunt-neuter updated to bleeding edge version (required for support for Ember.js 1.0RC2).

