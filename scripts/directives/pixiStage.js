
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
        
      },
      restrict: 'A'
    };

  }]);