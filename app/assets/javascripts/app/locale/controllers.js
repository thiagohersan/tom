trendOMeterApp.controller('LocaleController', function($translate, $location, $scope, LocaleService){
  $scope.init = function(){
    LocaleService.getLocale().then(function(data){
      $translate.use(data.locale);
      $location.path('/start');
    },function(){
      $location.path('/locale');
    });
  };

  $scope.init();
});
