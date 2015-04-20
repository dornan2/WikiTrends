// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope,List) {

        getList('api/trending100/');

        function getList(apiURL) {
            List.getData(apiURL)
                .success(function (custs) {
                    $scope.trends = custs;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

        $scope.createTodo = function() {
            console.log('rEkT M8');
        }



});
