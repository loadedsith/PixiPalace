'use strict';

angular.module('PixiPalace.view1', ['ngRoute','PixiPalace.Pixi'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'scripts/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','PixiPalacePixiService',function($scope, PixiPalacePixiService) {

  $scope.addABunny = function () {
    var pixiService = PixiPalacePixiService;

    var texture = pixiService.pixi.Texture.fromImage("images/bunny.png");
    var bunny = new pixiService.pixi.Sprite(texture);

    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.position.x = Math.random() * pixiService.renderer.view.width;
    bunny.position.y = Math.random() * pixiService.renderer.view.height;
    
    bunny.speed = Math.floor((Math.floor(Math.random() * 10) / 2));
    
    pixiService.stage.addChild(bunny);
    
    function animate() {
      requestAnimFrame(animate);

      // just for fun, lets rotate mr rabbit a little
      bunny.rotation += bunny.speed;

      // render the stage
      pixiService.renderer.render(pixiService.stage);
    }
    requestAnimFrame(animate);
    //------------
  };
  
}]);