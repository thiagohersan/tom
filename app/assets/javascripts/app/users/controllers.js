trendOMeterApp.controller('StartController', function($location, $scope, UserService, PromoterService){
    $scope.loading = false;
    $scope.error = false;

    $scope.redirect = function(){
        $location.path('/duels');
    }

    $scope.start = function(){ 
        var user_id = UserService.getLoggedID();
        $scope.loading = true;

        if(!user_id || PromoterService.isPromoter()){
            UserService.createAnonymous().then(
                function(response){
                    $scope.loading = false;
                    $scope.redirect();
                },
                function(response){
                    $scope.error = true;
                });
        }else{
            $scope.redirect();
        }
    }
});
trendOMeterApp.controller('UserController', function($scope, IndustryService, OccupationService) {
  IndustryService.all().then(function(response) {
    if(response.status === 200) {
      $scope.industries = response.data;
    } else {
      $scope.dependencyError = true;
    }
  });
  OccupationService.all().then(function(response) {
    if(response.status === 200) {
      $scope.occupations = response.data;
    } else {
      $scope.dependencyError = true;
    }
  });
});
