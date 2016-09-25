'use strict';
angular
    .module('Backbase.services' ,['Backbase.datagraph'])
    .factory('dataservice', ['datagraph', dataservice]);

function dataservice(datagraph) {
/*
  Exposing the service functions in an object.
*/
    var service = {
        getChampionships : getChampionships,
        getYearsRange : getYearsRange,
        getChampionshipResults : getChampionshipResults,

    };
    return service;
/*
  Make use of datagraph to put a GET request and 
  get the championships on the provided endpoint.
  It would return a promise to play with.
*/
    function getChampionships(params) {
        return datagraph.get(params.year+'.json' , params , null);
    }
/*
  Make use of datagraph to put a GET request and 
  get the championships results on the provided endpoint.
*/
    function getChampionshipResults(params){
        var url = params.year + '/' + params.round + '/results.json';
        return datagraph.get(url , params , null);
    }
/*
    Helper method to provide an array of year objects,
    Data fed into the Select Options
*/
    function getYearsRange(startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1980;
        while ( startYear <= currentYear ) {
                var nextYear = startYear++;
                var yearObj = {name: nextYear , value : nextYear};
                years.push(yearObj);
        } 
        return years;
    }

}
