// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope,List,$window) {

    getTrendsList('api/trending100/');
    getDailyList('api/daily100/');
    getMonthlyList('api/monthly100/');
    getYearlyList('api/yearly100/');
    fillChart();

    $scope.trends;
    $scope.dailyList;
    $scope.MonthlyList;
    $scope.YearlyList;

    function fillChart() {
        var keys =[];


        for (var i = 0; i < 3; i++) {
            List.getData('api/trending100/' + i + '/')
                .success(function (custs) {
                    keys[i] = custs.name;
                    alert(keys[i]);
                })
        }


    }

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

    $scope.search = function(name){
        List.getData("api/articles/" + name)
            //.then(onUserComplete);


            .success(function (custs) {
                alert(custs);
            })
            .error(function () {
                alert("Page does not exist");
            });
    };







    //$scope.options = {
    //
    //    chart: {
    //        type: 'stackedAreaChart',
    //        height: 450,
    //        margin : {
    //            top: 20,
    //            right: 20,
    //            bottom: 60,
    //            left: 40
    //        },
    //        x: function(d){return d[0];},
    //        y: function(d){return d[1];},
    //        useVoronoi: false,
    //        clipEdge: true,
    //        transitionDuration: 500,
    //        useInteractiveGuideline: true,
    //        xAxis: {
    //            showMaxMin: false,
    //            tickFormat: function(d) {
    //                //return d3.time.format('%x')(new Date(2015, 1, d, 0, 0, 0, 0))
    //                //var date = new Date(year, 0); // initialize a date in `year-01-01`
    //                //return new Date(date.setDate(day))
    //                return d;
    //
    //            }
    //        },
    //        yAxis: {
    //            tickFormat: function(d){
    //                return d3.format('')(d);
    //            }
    //        }
    //    }
    //};

    //var list = {
    //            1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 2, 7: 4, 8: 2, 9: 49, 10: 2, 11: 4 , 12: 24
    //    },
    //    arr = [];
    //
    //var list1 = {
    //        1: 12, 2: 14, 3: 12, 4: 14, 5: 12, 6: 12, 7: 14, 8: 12, 9: 49, 10: 12, 11: 14 , 12: 14
    //    },
    //    arr1 = [];
    //
    //for (var key in list) {
    //    arr.push([key, list[key]]);
    //    arr1.push([key, list1[key]]);
    //}
    //
    //$scope.data = [
    //    {
    //        "key" : keys[0],
    //        "values" : arr
    //    },
    //    {
    //        "key" : keys[1],
    //        "values" : arr1
    //    }
    //]

});
