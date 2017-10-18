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
        .when('/interview', {
            controller: 'InterviewController',
            templateUrl: '/templates/interview.html'
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
        })
        .when('/locale', {
            controller: 'LocaleController',
            templateUrl: '/templates/locale.html'
        }).otherwise('/locale');

    $translateProvider.translations('en', {
      //start page
      RESULT_BUTTON: 'Partial results',
      START_BUTTON: 'start',
      START_SUBTITLE: 'What does the future of your business look like?',
      SLOGAN: 'Innovation and Technology Consulting',
      PRIVACY_POLICY: 'Privacy Policy',
      //duel page
      LOADING_ERROR: 'There was an error during page load.',
      LOADING_ERROR2: ' and try again.',
      LOADING_ERROR_BUTTON: 'Click here',
      QUESTION1: 'Which trend will have the',
      QUESTION2: 'biggest impact on your business?',
      SKIP_DUEL: 'Skip this duel',
      //panel page
      CONGRATULATIONS1: 'Congratulations! These',
      CONGRATULATIONS2: 'are the hottest trends:',
      RESULTS: 'GET THE RESULTS',
      VOTE_AGAIN: 'VOTE AGAIN',
      //user page
      CALL_TO_ACTION1: 'Get the results and a detailed',
      CALL_TO_ACTION2: 'analysis from TREND-O-METER team:',
      NAME: 'Name*',
      EMAIL: 'E-mail*',
      COMPANY: 'Company',
      ROLE: 'Role',
      SELECT: 'Select',
      INDUSTRY: 'Industry',
      SEND: 'SEND',
      BACK: 'Back',
      //thanks page
      VOTE_AGAIN_BUTTON: 'vote again',
      THANKS: 'Soon we\'ll be sending Trend-O-Meter\'s results and detailed analysis.',
      CHECK_TREND_O_METER: 'Check the updated Trend-O-Meter',
      NEW_PARTICIPANT: 'NEW PARTICIPANT',
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
      PRIVACY_POLICY: 'Política de Privacidade',
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
      //user page
      CALL_TO_ACTION1: 'Receba o resultado e análise',
      CALL_TO_ACTION2: 'detalhada do Trend-O-Meter',
      NAME: 'Nome*',
      EMAIL: 'E-mail*',
      COMPANY: 'Empresa',
      ROLE: 'Cargo',
      SELECT: 'Selecione',
      INDUSTRY: 'Indústria',
      SEND: 'ENVIAR',
      BACK: 'Voltar',
      //thanks page
      VOTE_AGAIN_BUTTON: 'votar novamente',
      THANKS: 'Em breve enviaremos o resultado e análise detalhada do Trend-O-Meter',
      CHECK_TREND_O_METER: 'Ver termômetro atualizado',
      NEW_PARTICIPANT: 'NOVO PARTICIPANTE',
      //error partial page
      DEFAULT_ERROR: 'Ocorreu um erro! Tente novamente em instantes.',
      //loading partial page
      LOADING: 'Carregando...'
    });
    $translateProvider.preferredLanguage('en');
});
