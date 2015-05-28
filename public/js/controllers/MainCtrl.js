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
                for(x = 0; x < 5; x++){
                    values[x]=[];
                    for (i = 0 ; i < 24; i++) {
                        values[x].push({"x":i, "y":custs[x].total[i]});
                    }
                }

                $scope.data = [
                    {
                        "key" : custs[0].name,
                        "values" : values[0]
                    },
                    {
                        "key" : custs[1].name,
                        "values" : values[1]
                    },
                    {
                        "key" : custs[2].name,
                        "values" : values[2]
                    },
                    {
                        "key" : custs[3].name,
                        "values" : values[3]
                    },
                    {
                        "key" : custs[4].name,
                        "values" : values[4]
                    }


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

    function getDailyList(apiURL) {
        List.getData(apiURL)
            .success(function (custs) {
                $scope.dailyList = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load article data: ' + error.message;
            });
    }

    function getMonthlyList(apiURL) {
        List.getData(apiURL)
            .success(function (custs) {
                $scope.MonthlyList = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load article data: ' + error.message;
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

        List.getData('/api/articles/'+response)
            .success(function (custs) {
                if(custs == null)
                    alert("Please enter the name of a valid article");
                else
                    $window.location.href = '#/articles/'+response;
            })
            .error(function (error) {

                alert("Error");
            });
    };

    $scope.search = function(name){
        onUserComplete(name);
    };



});
