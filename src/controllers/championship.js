'use strict';
angular.module('Backbase.controllers', ['Backbase.services']).
  controller('championshipController', function($scope , dataservice) {
/*
  Initial Scope variables defined on controller scope.
*/
    $scope.nameFilter = '';
    $scope.championships = [];
    $scope.selectedYear = null;
    $scope.isLoading = false;
    $scope.sortType = 'circuitName';
    $scope.sortDirection = false;
    $scope.options = dataservice.getYearsRange(2005);
    $scope.selectedYear =  new Date().getFullYear();
/*
  Bootstrap and get championships data from the service.
  We can use and Init method instead, 
  if you have multiple things in controller to bootstrap.
*/
    getChampionships(function(data){
        $scope.championships = data;
        $scope.isLoading = false;
    });
/*
  Using a private function to get the $scope data from the service. 
  returns a promise to play with.
*/
     function getChampionships(callback){
      $scope.isLoading = true;
      dataservice.getChampionships({'year': $scope.selectedYear}).then(function (response) {
          callback(response.MRData.RaceTable.Races);
      } , function(){
        $scope.isLoading = false;
         window.alert("Failed to Load the Resource, Check Network");
      });      
    }
/*
  Scope method for handling the year dropdown change 
  and load relevant year data..
*/
    $scope.handleYearChange = function(){
      getChampionships( function(data){
        $scope.championships = data;
        $scope.isLoading = false;
      });
    },
/*
  Handles the sortType.
*/
    $scope.switchSortType = function(type){
      $scope.sortType = type;
      if($scope.sortDirection === false){
        $scope.sortDirection = true;
      } else{
        $scope.sortDirection = false;        
      }
    }
}).
/*
  Directives enhances the html, 
  check image would handle broken images on Grid 
  and set it to a default image of your choice.
*/
directive('checkImage', function($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$observe('ngSrc', function(ngSrc) {
                $http.get(ngSrc).success(function(){
                }).error(function(){
                    element.attr('ng-src', 'images/flags1/Pakistan.png'); // set default image
                });
            });
        }
    };
});


