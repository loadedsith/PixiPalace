angular.module("PixiPalace.Pixi",[]).service("PixiPalacePixiService",function(){"use strict";var e=this;void 0===PIXI&&console.log("PIXI is undefined, have you loaded pixi.js properly?"),e={pixi:PIXI,stage:new PIXI.Stage(421785),renderer:new PIXI.WebGLRenderer(400,300),textures:[],objects:[]}});