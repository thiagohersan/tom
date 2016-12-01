trendOMeterApp.controller('LocaleController', function($translate, $location, $scope, LocaleService){
  $scope.init = function(){
    LocaleService.getLocale().then(function(response){
      $translate.use(response.data.locale);
      $location.path('/start');
    },function(){
      $location.path('/locale');
    });
  };

  $scope.init();
});
