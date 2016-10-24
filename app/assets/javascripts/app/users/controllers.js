trendOMeterApp.controller('StartController', function($scope, UserService){
    var user_id = UserService.getLoggedID();
    $scope.loading = false;

    $scope.start = function(){ 
        $scope.loading = true;

        if(!user_id){
            UserService.createAnonymous().then(function(response){
                $scope.loading = false;
                if(response.status === 201){
                }else{
                }
            });
        }
    }
});
