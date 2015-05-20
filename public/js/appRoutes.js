// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })


        //.when('/articles', {
        //    templateUrl: 'views/article.html',
        //    controller: 'ArticleController'
        //})

        .when('/articles/:articleNAM/', {
            templateUrl: 'views/article.html',
            controller: 'ArticleController'
        })
        .otherwise({
            redirectTo: '/'
        });


    $locationProvider.html5Mode(true);

}]);