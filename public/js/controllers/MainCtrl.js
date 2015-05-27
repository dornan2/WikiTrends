// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope,List,$window) {

    fillChart();
    getDailyList('api/daily100/');
    getMonthlyList('api/monthly100/');
    getYearlyList('api/yearly100/');

    $scope.trends;
    $scope.dailyList;
    $scope.MonthlyList;
    $scope.YearlyList;

    function fillChart() {
        var values = [];
        List.getData('api/trending100/')
            .success(function (custs) {
                $scope.trends = custs;
                for(x = 0; x < 10; x++){
                    values[x]=[];
                    for (i = 0 ; i < 24; i++) {
                        values[x].push({"x":i, "y":custs[x].total[i]});
                    }
                }
                $scope.RARA = "it works!!";

                $scope.data = [
                    {
                        "key" : custs[0].name
                        ,
                        "values" : values[0]
                        //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    }
                    ,
                    {
                        "key" : custs[1].name
                        ,
                        "values" : values[1]
                        //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    },
                    {
                        "key" : custs[2].name
                        ,
                        "values" : values[2]
                        //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    },
                    {
                        "key" : custs[3].name
                        ,
                        "values" : values[3]
                        //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    }
                    ,
                    {
                        "key" : custs[4].name
                        ,
                        "values" : values[4]
                        //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    }
                    //,
                    //{
                    //    "key" : custs[5].name
                    //    ,
                    //    "values" : custs[5].total
                    //    //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    //},
                    //{
                    //    "key" : custs[6].name
                    //    ,
                    //    "values" : values[6]
                    //    //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    //},
                    //{
                    //    "key" : custs[7].name
                    //    ,
                    //    "values" : values[7]
                    //    //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    //},
                    //{
                    //    "key" : custs[8].name
                    //    ,
                    //    "values" : values[8]
                    //    //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    //},
                    //{
                    //    "key" : custs[9].name
                    //    ,
                    //    "values" : values[9]
                    //    //"values" : [{"x":1, "y":1},{"x":2, "y":12},{"x":3, "y":32},{"x":4, "y":22},{"x":5, "y":2},{"x":6, "y":12},{"x":7, "y":32},{"x":8, "y":22},{"x":9, "y":2},{"x":10, "y":12},{"x":11, "y":32},{"x":12, "y":22},{"x":13, "y":1},{"x":14, "y":12},{"x":15, "y":32},{"x":16, "y":22},{"x":17, "y":2},{"x":18, "y":12},{"x":19, "y":32},{"x":20, "y":22},{"x":21, "y":2},{"x":22, "y":12},{"x":23, "y":32}]
                    //}

                ]

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
                        useVoronoi: false,
                        clipEdge: true,
                        transitionDuration: 500,
                        useInteractiveGuideline: true,
                        xAxis: {
                            axisLabel: 'Previous 24 hrs',
                            showMaxMin: false,
                            tickFormat: function(d) {

                                return d

                            }
                        },
                        yAxis: {
                            axisLabel: 'Previous 24 hrs',
                            tickFormat: function(d){

                                //return d3.time.format('%x')(new Date(2015, 1, d, 0, 0, 0, 0))
                                //var date = new Date(year, 0); // initialize a date in `year-01-01`
                                //return new Date(date.setDate(day))

                                return d;
                            }
                        }
                    }
                };


            })
    }

    //function getTrendsList(apiURL) {
    //    List.getData(apiURL)
    //        .success(function (custs) {
    //            $scope.trends = custs;
    //        })
    //        .error(function (error) {
    //            $scope.status = 'Unable to load customer data: ' + error.message;
    //        });
    //}

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

        $window.location.href = '#/articles/'+response;
    };

    $scope.search = function(name){
        onUserComplete(name);
    };



});
