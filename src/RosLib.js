/**
 * @author Russell Toris - rctoris@wpi.edu
 */

/* To make this work on Node.js */
if (typeof Npm !== 'undefined' && Npm.require) {
  EventEmitter2 = Npm.require('events').EventEmitter;
}
/* To make it work in Meteor */
if (typeof Meteor !== 'undefined' && Meteor.require) {
  WebSocket = Meteor.require('ws');
}

ROSLIB = {
  REVISION : '7-devel-TL'
};

//URDF types
ROSLIB.URDF_SPHERE = 0;
ROSLIB.URDF_BOX = 1;
ROSLIB.URDF_CYLINDER = 2;
ROSLIB.URDF_MESH = 3;
