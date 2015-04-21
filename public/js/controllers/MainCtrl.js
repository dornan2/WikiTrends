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

    $scope.options = {


        chart: {
            type: 'stackedAreaChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 40
            },
            x: function(d){return d[0];},
            y: function(d){return d[1];},
            useVoronoi: false,
            clipEdge: true,
            transitionDuration: 500,
            useInteractiveGuideline: true,
            xAxis: {
                showMaxMin: false,
                tickFormat: function(d) {
                    return d3.time.format('%x')(new Date(2015, 1, d, 0, 0, 0, 0))
                }
            },
            yAxis: {
                tickFormat: function(d){
                    return d3.format('.2f')(d);
                }
            }
        }
    };

    $scope.data = [
        {
            "key" : "howaya" ,
            "values" : [ {'1': 3, '3': 4,'31': 6} ],
            "values" : [['1', 3], ['3', 4],['31', 6]]
        }

    ]












});
