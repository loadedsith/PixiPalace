
angular.module('PixiPalace.Pixi')
  .directive('pixiPalaceStage', ['PixiPalacePixiService',function (PixiPalacePixiService) {//$timeout, $interval, 
    'use strict'; 
    console.log('PixiPalaceStage reporting in');



    return {
      link: function(scope, element) { //scope, element, attrs
        var pixiService = PixiPalacePixiService;
        
        pixiService.stage  =  new pixiService.pixi.Stage(0x66FF99);
        var options = {};
        options.view = element[0];
        pixiService.renderer  = new pixiService.pixi.autoDetectRenderer(400, 300, options);

        // pixiService.pixi.autoDetectRenderer(400, 400, element)
        //document.body.appendChild(pixiService.renderer.view);

        //------------
        // create a texture from an image path
        var texture = pixiService.pixi.Texture.fromImage("images/bunny.png");
        // create a new Sprite using the texture
        var bunny = new pixiService.pixi.Sprite(texture);
        
        // center the sprites anchor point
        bunny.anchor.x = 0.5;
        bunny.anchor.y = 0.5;

        // move the sprite t the center of the screen
        bunny.position.x = 200;
        bunny.position.y = 150;

        pixiService.stage.addChild(bunny);
        
        function animate() {
          requestAnimFrame(animate);

          // just for fun, lets rotate mr rabbit a little
          bunny.rotation += 0.1;

          // render the stage
          pixiService.renderer.render(pixiService.stage);
        }
        requestAnimFrame(animate);
        //------------
      },
      restrict: 'A'
    };

  }]);