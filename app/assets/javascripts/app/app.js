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
      //start page
      RESULT_BUTTON: 'Partial results',
      START_BUTTON: 'start',
      START_SUBTITLE: 'How the future of your business will be?',
      SLOGAN: 'Innovation and Technology Consulting',
      //duel page
      DUEL_ERROR: 'There was an error during page load.',
      DUEL_ERROR2: ' and try again.',
      DUEL_ERROR_BUTTON: 'Click here',
      QUESTION1: 'Which trend will most',
      QUESTION2: 'impact your business?',
      SKIP_DUEL: 'Skip this duel',
      //error partial page
      DEFAULT_ERROR: 'An error has occurred. Try again later.'
    }).translations('pt', {
      //start page
      RESULT_BUTTON: 'Ver o termômetro atualizado',
      START_BUTTON: 'começar',
      START_SUBTITLE: 'Como será o futuro do seu negócio?',
      SLOGAN: 'Consultoria de Inovação e Tecnologia',
      //duel page
      DUEL_ERROR: 'Ocorreu um erro ao carregar a pagina.',
      DUEL_ERROR2: ' e tente novamente.',
      DUEL_ERROR_BUTTON: 'Clique aqui',
      QUESTION1: 'Qual tendência provocará o',
      QUESTION2: 'maior impacto em seu negócio?',
      SKIP_DUEL: 'Pular este duelo',
      //error partial page
      DEFAULT_ERROR: 'Ocorreu um erro! Tente novamente em instantes.'
    });
    $translateProvider.preferredLanguage('en');
});
