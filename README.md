# Aurelia JSPM Example

Here is an example program demonstrating various features of
[Aurelia](http://www.aurelia.io/),
with [JSPM](http://jspm.io/) to ease package management and
[SystemJS](https://github.com/systemjs/systemjs) to easily load multiple kinds of modules.

There is a surprising amount of recent technology behind the scenes,
compared to single page web apps built using tools only a few years old;
I will look for a way to more effectively explain it later.

[Kyle Cordes](http://kylecordes.com), reach me at [Oasis Digital](http://oasisdigital.com/)

## Getting Started

```
npm install
npm start
```

A quick look at package.json will show that the complexity there is quite minimal;
no "build tool" is needed other than what JSPM/SystemJS provides,
and live-server provides automatic reloading during development with essentially no effort.

The live server launched by the "start" command should launch your browser automatically.

Try editing the source files, and see that your browser reloads.

## Why Another Example?

There are numerous example applications floating around for Aurelia;
why another one?

* I wanted to demonstrate that JSPM alone is good enough as a build process
  during development at least, with no help from Gulp or Grunt.
* Most, JSPM examples I can find have use project root as the web root;
  this is generally not a great idea, making it unnecessarily difficult to
  understand which files are served to the browser and which are not.
  Therefore this example separates the web root into a "www" directory.
* I wanted an example handy to use in explaining Aurelia,
  with minimal unnecessary complexity but showing the features I felt important to show.
  This example is only part way there, but still useful to me.

Bits and pieces are borrowed from the Aurelia "aurelia-skeleton-navigation" project,
in places where I didn't have anything important to add.

## Bundling

Unfortunately, with Aurelia, JSPM alone is not sufficient to bundle an application
for efficient production deployment. This is because Aurelia loads many modules dynamically,
such that a bundling program cannot follow static references to determine what all modules to include.
There is a [Aurelia Bundler](http://github.com/aurelia/bundler) that covers this gap,
but for simplicity I have omitted it here.
