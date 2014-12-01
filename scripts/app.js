angular.module('PixiPalace', [
  'ngRoute',
  'PixiPalace.Pixi',
  'PixiPalace.view1',
  'PixiPalace.view2'
]).
config(['$routeProvider', function($routeProvider) {
  'use strict';
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
