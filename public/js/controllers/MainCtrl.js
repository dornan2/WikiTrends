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

        var onUserComplete = function (response) {
            $scope.user = response.data;
            //$http.get($scope.user.repos_url)
            //    .then(onRepos, onError);
        };

        //var onRepos = function(response){
        //    $scope.repos = response.data;
        //};
        //
        //var onError = function (reason) {
        //    $scope.error = "Could not fetch user";
        //};

        $scope.search = function(username){
            List.getData("api/articles/" + username)
                .then(onUserComplete);
        };





});
