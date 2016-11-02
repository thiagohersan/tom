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
trendOMeterApp.controller('UserController', function($scope, $location, IndustryService, OccupationService, UserService) {
  $scope.dependencyError = false;
  $scope.loadingIndustries = true;
  $scope.loadingOccupations = true;
  $scope.saving = false;
  $scope.error = false;
  $scope.user = {};

  $scope.loading = function() {
    var loading = $scope.loadingIndustries || $scope.loadingOccupations;
    if(loading && !$scope.dependencyError) {
      return true;
    }
    return false;
  }

  $scope.send = function() {
    $scope.saving = true;
    $scope.error = false;
    try {
      UserService.save($scope.user).then(function(response){
        $scope.saving = false;
        $location.path('/thanks');
      },function(error){
        $scope.saving = false;
        $scope.error = true;
      });
    }catch(e){
      return $location.path('/start');
    }
  }

  $scope.init = function() {
    $scope.dependencyError = false;
    $scope.loadingIndustries = true;
    $scope.loadingOccupations = true;
    $scope.saving = false;
    $scope.error = false;
    if(!UserService.getLoggedID())
      return $location.path('/start');
    IndustryService.all().then(function(response) {
      if(response.status === 200) {
        $scope.industries = response.data;
        $scope.loadingIndustries = false;
      } else {
        $scope.dependencyError = true;
      }
    });
    OccupationService.all().then(function(response) {
      if(response.status === 200) {
        $scope.occupations = response.data;
        $scope.loadingOccupations = false;
      } else {
        $scope.dependencyError = true;
      }
    });
  };
  $scope.init();
});
