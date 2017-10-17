trendOMeterApp.controller('InterviewController', function($location, $scope, IndustryService, AreaService, UserService){
    $scope.loading = false;
    $scope.error = false;
    $scope.user = {
        name: '',
        email: ''
    };

    $scope.redirect = function(){
        $location.path('/duels');
    }

    $scope.start = function(){
        $scope.redirect();
    }

    $scope.send = function(){
        try {
            UserService.save($scope.user).then(function(response){
                $scope.saving = false;
                $location.path('/duels');
            },function(error){
                $scope.saving = false;
                $scope.error = true;
            });
        }catch(e){
            return $location.path('/start');
        }
    }

    $scope.init = function() {
        IndustryService.all().then(function(response) {
            if(response.status === 200) {
                $scope.industries = response.data;
            }
        });
        AreaService.all().then(function (response) {
          if(response.status === 200) {
            $scope.areas = response.data;
          }
        });
    }


    $scope.init();
});
