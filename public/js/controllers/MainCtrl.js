// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope,List,$window) {

    getTrendsList('api/trending100/');
    getDailyList('api/daily100/');
    getMonthlyList('api/monthly100/');
    getYearlyList('api/yearly100/');

    $scope.trends;
    $scope.dailyList;
    $scope.MonthlyList;
    $scope.YearlyList;


    function getTrendsList(apiURL) {
        List.getData(apiURL)
            .success(function (custs) {
                $scope.trends = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    function getDailyList(apiURL) {
        List.getData(apiURL)
            .success(function (custs) {
                $scope.dailyList = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    function getMonthlyList(apiURL) {
        List.getData(apiURL)
            .success(function (custs) {
                $scope.MonthlyList = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }


    function getYearlyList(apiURL) {
        List.getData(apiURL)
            .success(function (custs) {
                $scope.YearlyList = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    var onUserComplete = function (response) {
        $scope.user = response.data;

        if(response.data == null )
            alert("Page does not exist");
        else
            $window.location.href = '/articles/'+$scope.user._id;

        console.log($scope.user);
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
            //x: function(d){return d[0];},
            //y: function(d){return d[1];},
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
                    return d3.format('')(d);
                }
            }
        }
    };


    var list = {1: 2, 2: 4, 3: 3, 4: 6, 5: 7, 6: 5,
        7: 4,
        8: 3,
        9: 4,
        10: 6,
        11: 8,
        12: 9,
        13: 8,
        14: 7,
        15: 6,
        16: 5,
        17: 4,
        18: 32,
        19: 1,
        20: 7,
        21: 4,
        22: 3,
        23: 4,
        24: 6,
        25: 8,
        26: 5,
        27: 3, 28: 8, 29: 6, 30: 3, 31: 4
    }, arr = [];

    for (var key in list) {
        arr.push([key, list[key]]);
    }



    $scope.data = [
        {
            "key" : "howaya" ,
            //"values" : [ {'1': 3, '3': 4,'31': 6} ],
            "values" : arr
        }

    ]

});
