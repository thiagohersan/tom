trendOMeterApp.controller('DuelsController', function($scope,UserService, DuelService) {
    $scope.loading = true; 
    $scope.duels = [];
    $scope.currentDuel = null;

    function init() {
        var user_id = UserService.getLoggedID();
        DuelService.createDuels(user_id).then(function(response) {
            $scope.duels = response.data;
            $scope.loading = false;
        });
    }

    $scope.getCurrentDuel = function() {
        $scope.currentDuel = $scope.duels.shift();
    }

    init();

});
