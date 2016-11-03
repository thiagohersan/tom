trendOMeterApp.controller('StartController', function($location, $scope, UserService, PromoterService){
    $scope.loading = false;
    $scope.error = false;
    $scope.isCompleted = UserService.isCompleted();

    $scope.redirect = function(){
        $location.path('/duels');
    }

    $scope.panel = function() {
        $location.path('/panel');
    }

    $scope.start = function(){ 
        var user_id = UserService.getLoggedID();
        $scope.loading = true;

        if(!user_id || PromoterService.isPromoter()){
            UserService.unset();
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
  $scope.user = {
    name: '',
    email: ''
  };
  $scope.formErrors = {};

  $scope.loading = function() {
    var loading = $scope.loadingIndustries || $scope.loadingOccupations;
    if(loading && !$scope.dependencyError) {
      return true;
    }
    return false;
  }

  $scope.send = function() {
    $scope.saving = true;
    $scope.formErrors = {};
    $scope.error = false;

    if($scope.user.name.trim().length === 0) {
      $scope.formErrors.name = true;
      $scope.saving = false;
      return false;
    }

    var reEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if(!reEmail.test($scope.user.email)) {
      $scope.formErrors.email = true;
      $scope.saving = false;
      return false;
    }

    try {
      UserService.save($scope.user).then(function(response){
        $scope.saving = false;
        UserService.setCompleted();
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
    if(UserService.isCompleted())
      return $location.path('/panel');
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
