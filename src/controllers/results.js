'use strict';
angular.module('Backbase.results', ['Backbase.services']).
controller('resultsController', function($scope , $routeParams, dataservice) {
/*
  The initial variable defined on scope.
*/  
    $scope.nameFilter = '';
    $scope.isLoading = false;
    $scope.sortType = '';
    $scope.sortDirection = false;
    $scope.championshipsResults = [];
    $scope.rawRace = [];
/*
  Controller Landing on initialize. 
  this will Load all the championship results
*/
    getChampionshipResults(function(data){
        $scope.championshipsResults = data;
        $scope.isLoading = false;
    });
/*
  Get championships results, Based on round number and season
*/
     function getChampionshipResults(callback){
      $scope.isLoading = true;
      dataservice.getChampionshipResults({'year': $routeParams.year , 'round': $routeParams.round}).then(function (response) {
        $scope.rawRace = response.MRData.RaceTable.Races[0];
        callback(response.MRData.RaceTable.Races[0].Results);
      } , function(){
        $scope.isLoading = false;
        alert("Failed to Load the resource, Check Network");
      });      
    }
/*
   Switch the sort Type to enable sorting for other types.
*/
    $scope.switchSortType = function(type){
      $scope.sortType = type;
      if($scope.sortDirection == false){
        $scope.sortDirection = true;
      } else{
        $scope.sortDirection = false;        
      }
    }
});

