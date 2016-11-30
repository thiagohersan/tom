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
      LOADING_ERROR: 'There was an error during page load.',
      LOADING_ERROR2: ' and try again.',
      LOADING_ERROR_BUTTON: 'Click here',
      QUESTION1: 'Which trend will most',
      QUESTION2: 'impact your business?',
      SKIP_DUEL: 'Skip this duel',
      //panel page
      CONGRATULATIONS1: 'Congratulations! These',
      CONGRATULATIONS2: 'are the hottest trends:',
      RESULTS: 'GET THE RESULTS',
      VOTE_AGAIN: 'VOTE AGAIN',
      //error partial page
      DEFAULT_ERROR: 'An error has occurred. Try again later.',
      //loading partial page
      LOADING: 'Loading...'
    }).translations('pt', {
      //start page
      RESULT_BUTTON: 'Ver o termômetro atualizado',
      START_BUTTON: 'começar',
      START_SUBTITLE: 'Como será o futuro do seu negócio?',
      SLOGAN: 'Consultoria de Inovação e Tecnologia',
      //duel page
      LOADING_ERROR: 'Ocorreu um erro ao carregar a pagina.',
      LOADING_ERROR2: ' e tente novamente.',
      LOADING_ERROR_BUTTON: 'Clique aqui',
      QUESTION1: 'Qual tendência provocará o',
      QUESTION2: 'maior impacto em seu negócio?',
      SKIP_DUEL: 'Pular este duelo',
      //panel page
      CONGRATULATIONS1: 'Parabéns! Essas são as',
      CONGRATULATIONS2: 'tendências mais quentes:',
      RESULTS: 'RECEBA O RESULTADO COMPLETO',
      VOTE_AGAIN: 'VOTAR NOVAMENTE',
      //error partial page
      DEFAULT_ERROR: 'Ocorreu um erro! Tente novamente em instantes.',
      //loading partial page
      LOADING: 'Carregando...'
    });
    $translateProvider.preferredLanguage('en');
});
