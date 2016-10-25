// Create the angular application
var trendOMeterApp = angular.module('trendOMeterApp', ['ngCookies','ngRoute']);

trendOMeterApp.config(function($routeProvider) {
    $routeProvider
        .when('/start', {
            controller: 'StartController'
        })
        .when('/duels', {
            controller: 'DuelsController'
        });
});
