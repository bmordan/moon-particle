#particle
> E.g. Seed project to get started with Famo.us.

[![Build Status](https://travis-ci.org/bmordan/particle.svg?branch=master)](https://travis-ci.org/bmordan/particle) [![Dependency Status](https://david-dm.org/bmordan/particle.svg)](https://david-dm.org/bmordan/particle) [![devDependency Status](https://david-dm.org/bmordan/particle/dev-status.svg)](https://david-dm.org/bmordan/particle#info=devDependencies)

##Dependencies
It is actually quite simple really

First make sure you have node.js installed... without that nothing works!  You can either install it with your favorite package manager or with [the installer](http://nodejs.org/download) found on [nodejs.org](http://nodejs.org).

This project relies on grunt-cli, and bower to do all the heavy lifting for you

```
npm install -g grunt-cli bower
```

##Getting Started

```
npm install && bower install
```

##Running the Development Server

Simply run ```grunt serve``` and you will start a local development server and open Chrome.  Watch tasks will be running, and your browser will be automatically refreshed whenever a file in the repo changes.

You can run serve with ```--port=9001``` to manually pick the port that the server will run on

What do you get? An amazing app that causes the moon to rotate around the planet earth using famo.us physics.

!['screen grab'](https://pbs.twimg.com/media/CAKI8lMXIAEiEH5.png)
