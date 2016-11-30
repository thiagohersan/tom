// Create the angular application
var trendOMeterApp = angular.module('trendOMeterApp',
  ['ngCookies','ngRoute', 'pascalprecht.translate']);

trendOMeterApp.config(function($routeProvider, $translateProvider) {
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
        })
        .when('/user', {
            controller: 'UserController',
            templateUrl: '/templates/user.html'
        })
        .when('/panel', {
            controller: 'PanelController',
            templateUrl: '/templates/panel.html'
        })
        .when('/thanks', {
            controller: 'ThanksController',
            templateUrl: '/templates/thanks.html'
        }).otherwise('/start');

    $translateProvider.translations('en', {
        JUMP_DUEL: 'Skip this duel'
    }).translations('pt', {
        JUMP_DUEL: 'Pular este duelo'
    });
    $translateProvider.preferredLanguage('pt');
});
