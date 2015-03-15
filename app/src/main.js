/* globals define */
define(function(require, exports, module) {
  'use strict';
  // import dependencies
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');
  var PhysicsEngine = require('famous/physics/PhysicsEngine');
  var Particle = require('famous/physics/bodies/Particle');
  var RepulsionForce = require('famous/physics/forces/Repulsion');

  var physics = new PhysicsEngine();
  var mainContext = Engine.createContext();

  var planetSurface = new Surface({
    size: [300,300],
    properties: {
      backgroundColor: 'green',
      borderRadius: '50%'
    }
  });
  var planetParticle = new Particle()
  var planetModifier = new Modifier({
    origin: [0.5,0.5],
    align: [0.5,0.5],
    transform: function () {
      return planetParticle.getTransform()
    }
  });

  var sateliteSurface = new Surface({
    size: [30,30],
    properties: {
      backgroundColor: 'white',
      borderRadius: '50%'
    }
  });
  var sateliteParticle = new Particle({
    position: [0, -100,0]
  });
  var sateliteModifier = new Modifier({
    origin: [0.5,0.5],
    align: [0.5,0.5],
    transform: function () {
      return sateliteParticle.getTransform()
    }
  });

  var gravity = new RepulsionForce({
    strength: -0.75
  });

  physics.addBody(planetParticle);
  physics.addBody(sateliteParticle);
  physics.attach(gravity, sateliteParticle, planetParticle);
  sateliteParticle.setVelocity([0.1,0,0]);
  mainContext.add(sateliteModifier).add(sateliteSurface);
  mainContext.add(planetModifier).add(planetSurface);

});
