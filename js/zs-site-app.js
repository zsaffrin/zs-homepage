var app = angular.module('zsSiteApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {  

    $routeProvider
        .when('/', { templateUrl: 'views/home.html' } )
        .when('/about', { templateUrl: 'views/about.html' } )
        .otherwise( { redirectTo: '/' } );

    $locationProvider.html5Mode(true);

}]);

app.controller('MainCtrl', function ($scope) {



});
