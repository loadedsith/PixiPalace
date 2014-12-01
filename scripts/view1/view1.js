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

    //move origin to middle of sprite
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    //place bunny
    bunny.position.x = Math.random() * pixiService.renderer.view.width;
    bunny.position.y = Math.random() * pixiService.renderer.view.height;
    
    //randomizer for speed
    var seed = Math.random().toFixed(2);
    seed = seed / 2;//half
    bunny.speed = seed + 0.05;//> 0
    
    //add to the stage!
    pixiService.stage.addChild(bunny);
    
    function animate() {
      requestAnimFrame(animate);

      // just for fun, lets rotate mr rabbit a little
      bunny.rotation += bunny.speed;
      if($scope.dir){
        console.log('$scope.dir', $scope.dir);
      }
      debugger;
      // render the stage
      pixiService.renderer.render(pixiService.stage);
    }
    requestAnimFrame(animate);
    //------------
  };
  
}]);