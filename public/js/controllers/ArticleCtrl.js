// public/js/controllers/MainCtrl.js
angular.module('ArticleCtrl', []).controller('ArticleController', function($scope, List,$routeParams) {

    $scope.name =  123;
    console.log("heres johnny");

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



});
