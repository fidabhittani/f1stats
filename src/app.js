/*
  This would be an NG-APP module, which loads up all the necessary modules withit.
  We define certain Configs on this Module.
  Routes Gets configured and triggered from this module.
*/
var app = angular.module('Backbase', [
  'Backbase.controllers',
	'Backbase.results',
	'ngRoute',
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/championships', {
        templateUrl: 'src/templates/championships.html',
        controller: 'championshipController'
      }).
      when('/results/:round/:year' , {
        templateUrl: 'src/templates/championship-results.html',
        controller: 'resultsController'
      }).
      otherwise({
        redirectTo: '/championships'
      });
  }]);

