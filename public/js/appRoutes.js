// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/api', {
            templateUrl: 'views/api.html',
            controller: 'MainController'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'MainController'
        })

        .when('/forecast', {
            templateUrl: 'views/forecast.html',
            controller: 'MainController'
        })

        .when('/popular', {
            templateUrl: 'views/popular.html',
            controller: 'MainController'
        })

        .when('/articles/:articleNAM/', {
            templateUrl: 'views/article.html',
            controller: 'ArticleController'
        })

        .otherwise({
            redirectTo: '/'
        });


    //$locationProvider.html5Mode(true);

}]);