'use strict';

/**
 * @ngdoc function
 * @name zuiuxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zuiuxApp
 */
angular.module('zuiuxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
