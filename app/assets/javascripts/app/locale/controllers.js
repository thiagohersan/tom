trendOMeterApp.controller('LocaleController', function($translate, $location, $scope, LocaleService){
  $scope.init = function(){
    LocaleService.getLocale().then(function(response){
      $translate.use(response.data.locale);
      $location.path('/promoter');
    },function(){
      $location.path('/locale');
    });
  };

  $scope.init();
});
