angular.module("PixiPalace.Pixi").directive("pixiPalaceStage",["PixiPalacePixiService",function(e){"use strict";return console.log("PixiPalaceStage reporting in"),{link:function(i,a){var r=e;r.stage=new r.pixi.Stage(6750105);var t={};t.view=a[0],r.renderer=new r.pixi.autoDetectRenderer(400,300,t)},restrict:"A"}}]);