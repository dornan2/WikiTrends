// public/js/controllers/MainCtrl.js
angular.module('ArticleCtrl', []).controller('ArticleController', function($scope, List,$routeParams) {

    getList('api/articles/' + $routeParams.articleNAM);

    function getList(apiURL) {
        List.getData(apiURL)
            .success(function (custs) {
                $scope.article = custs;
                var name = custs._id;
                var year =  custs.yearly_views;
                var counter = 1;
                var arr = [];
                for(i = 1; i < 13; i++){
                    for(x = 1; x < Object.keys(year[i]).length+1; x++){
                        arr.push([counter,year[i][x]]);
                        arr.push({"x":counter, "y":year[i][x]});
                        counter++;
                    }
                }

                $scope.options = {
                    chart: {
                        type: 'lineWithFocusChart',
                        height: 450,
                        isArea:true,
                        margin : {
                            top: 20,
                            right: 20,
                            bottom: 60,
                            left: 40
                        },
                        transitionDuration: 500,

                        x: function(d){return d[0];},
                        y: function(d){return d[1];},

                        xAxis: {
                            axisLabel: 'X Axis',
                            tickFormat: function(d){
                                return d;
                            }
                        },
                        x2Axis: {
                            tickFormat: function(d){
                                return d3.format('')(d);
                            }
                        },
                        yAxis: {
                            axisLabel: 'Y Axis',
                            tickFormat: function(d){
                                return d3.format('')(d);
                            },
                            rotateYLabel: false
                        },
                        y2Axis: {
                            tickFormat: function(d){
                                return d3.format('')(d);
                            }
                        }
                    }
                };

                $scope.data = [
                    {
                        "key": name,
                        "values": arr
                    }
                ]


            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

});
