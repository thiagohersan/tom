trendOMeterApp.controller('StartController', function($location, $scope, UserService){
    $scope.loading = false;
    $scope.error = false;

    $scope.redirect = function(){
        $location.path('/duels');
    }

    $scope.start = function(){ 
        var user_id = UserService.getLoggedID();
        $scope.loading = true;

        if(!user_id){
            UserService.createAnonymous().then(function(response){
                $scope.loading = false;
                if(response.status === 201){
                    $scope.redirect();
                } else {
                    $scope.error = true;
                }
            });
        }else{
            $scope.redirect();
        }
    }
});
