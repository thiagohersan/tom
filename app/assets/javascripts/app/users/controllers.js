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
