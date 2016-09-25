/**
    Created by Fida  on 6/22/15.
    Service which wraps up all the $http stuff and provides a cleaner and simple API to deal with $http request
 */
'use strict';

angular
    .module('Backbase.datagraph', [])
    .factory('datagraph', ['$http', '$q', datagraph]);

function datagraph($http, $q) {
    var serviceBase = 'http://ergast.com/api/f1/';

    var obj = {};

    obj.get = function (q, p) {
        return $http.get(serviceBase + q, {params: p}).then(function (results) {                               
            return results.data;
        });
    };
    obj.jsonp = function (q, p) {
        return $http.jsonp(serviceBase + q, {params: p}).then(function (results) {
            return results.data;
        });
    };
    obj.post = function (q, object, p) {
        return $http.post(serviceBase + q, object, {params: p}).then(function (results) {
            return results.data;
        });
    };
    obj.put = function (q, object, p) {
        return $http.put(serviceBase + q, object, {params: p}).then(function (results) {
            return results.data;
        });
    };
    obj.delete = function (q, p) {
        return $http.delete(serviceBase + q, {params: p}).then(function (results) {
            return results.data;
        });
    };
    return obj;
}
