// public/js/controllers/MainCtrl.js
angular.module('ArticleCtrl', []).controller('ArticleController', function($scope, List,$routeParams) {

    $scope.name =  123;
    getList('api/articles/' + $routeParams.articleNAM);

    function getList(apiURL) {
        List.getData(apiURL)
            .success(function (custs) {
                $scope.article = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }
    
    $scope.options = {
        chart: {
            type: 'lineWithFocusChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 40
            },
            transitionDuration: 500,
            xAxis: {
                axisLabel: 'X Axis',
                tickFormat: function(d){
                    return d3.format(',f')(d);
                }
            },
            x2Axis: {
                tickFormat: function(d){
                    return d3.format(',f')(d);
                }
            },
            yAxis: {
                axisLabel: 'Y Axis',
                tickFormat: function(d){
                    return d3.format(',.2f')(d);
                },
                rotateYLabel: false
            },
            y2Axis: {
                tickFormat: function(d){
                    return d3.format(',.2f')(d);
                }
            }

        }
    };

    $scope.data = generateData();

    /* Random Data Generator (took from nvd3.org) */
    function generateData() {
        return stream_layers(3,10+Math.random()*200,.1).map(function(data, i) {
            return {
                key: 'Stream' + i,
                values: data
            };
        });
    }

    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;
        function bump(a) {
            var x = 1 / (.1 + Math.random()),
                y = 2 * Math.random() - .5,
                z = 10 / (.1 + Math.random());
            for (var i = 0; i < m; i++) {
                var w = (i / m - y) * z;
                a[i] += x * Math.exp(-w * w);
            }
        }
        return d3.range(n).map(function() {
            var a = [], i;
            for (i = 0; i < m; i++) a[i] = o + o * Math.random();
            for (i = 0; i < 5; i++) bump(a);
            return a.map(stream_index);
        });
    }

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
            return d3.range(m).map(function(j) {
                var x = 20 * j / m - i / 3;
                return 2 * x * Math.exp(-.5 * x);
            }).map(stream_index);
        });
    }

    function stream_index(d, i) {
        return {x: i, y: Math.max(0, d)};
    }













});
