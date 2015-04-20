// public/js/services/ListService.js
angular.module('ListService', []).factory('List', ['$http', function($http) {

        return {
            getData: function(apiURL){
                return $http.get(apiURL);
                }
        };

}]);