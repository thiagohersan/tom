// Create the angular application
var trendOMeterApp = angular.module('trendOMeterApp', ['ngCookies','ngRoute']);

trendOMeterApp.config(function($routeProvider) {
    $routeProvider
        .when('/promoter', {
            controller: 'PromoterController',
            templateUrl: '/templates/start.html'
        })
        .when('/start', {
            controller: 'StartController',
            templateUrl: '/templates/start.html'
        })
        .when('/duels', {
            controller: 'DuelsController',
            templateUrl: '/templates/duels.html'
        }).otherwise('/start');
});
