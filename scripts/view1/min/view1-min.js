"use strict";angular.module("PixiPalace.view1",["ngRoute","PixiPalace.Pixi"]).config(["$routeProvider",function(e){e.when("/view1",{templateUrl:"scripts/view1/view1.html",controller:"View1Ctrl"})}]).controller("View1Ctrl",["$scope","PixiPalacePixiService",function(e,i){e.addABunny=function(){function e(){requestAnimFrame(e),t.rotation+=t.speed,r.renderer.render(r.stage)}var r=i,n=r.pixi.Texture.fromImage("images/bunny.png"),t=new r.pixi.Sprite(n);t.anchor.x=.5,t.anchor.y=.5,t.position.x=Math.random()*r.renderer.view.width,t.position.y=Math.random()*r.renderer.view.height,t.speed=Math.floor(Math.floor(10*Math.random())/2),r.stage.addChild(t),requestAnimFrame(e)}}]);