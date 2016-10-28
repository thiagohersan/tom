trendOMeterApp.controller('DuelsController', function($scope,UserService, DuelService, $location, $timeout) {
    $scope.loading = true; 
    $scope.duels = [];
    $scope.currentDuel = null;
    $scope.totalDuels = 12;
    $scope.error = false;
    $scope.saving = false;
    $scope.winnerTrend = null;
    $scope.showTrendInfoBox = false;
    $scope.trendInfo = null;

    function init() {
        var user_id = UserService.getLoggedID();
        if(!user_id){
            $location.path('/start');
            return;
        }
        DuelService.createDuels(user_id).then(function(response) {
            $scope.duels = response.data;
            $scope.loading = false;
            $scope.getCurrentDuel();
        });
    }

    $scope.getCurrentDuel = function() {
        if($scope.duels.length == 0){
            $scope.finish();
        }
        $scope.currentDuel = $scope.duels.shift();
    };

    $scope.finish = function() {
        $location.path('/finish');
    };

    $scope.getCurrentPage = function() {
        return $scope.totalDuels - $scope.duels.length;
    };

    $scope.saveAction = function(promise) {
        $scope.saving = true;
        promise.then(function(response) {
            $scope.error = false;
            $scope.getCurrentDuel();
            $scope.saving = false;
        }, function(response){
            $scope.error = true;
            $scope.saving = false;
        });
    }
    
    $scope.skip = function() {
        if(!$scope.saving){
            $scope.saveAction(DuelService.skip($scope.currentDuel.id));
        }
    }

    $scope.winner = function(winnerTrend) {
        if(!$scope.saving){
            $scope.saveAction(DuelService.setWinner($scope.currentDuel.id, winnerTrend.id));    
        }
    }

    $scope.setWinner = function(winnerTrend) {
        $scope.winnerTrend = winnerTrend;
        $scope.saving = true;

        $timeout(function() {
            $scope.winner(winnerTrend);
        }, 500);
    }

    $scope.isSelected = function(winnerTrend) {
        if(winnerTrend !== undefined && $scope.saving) {
            return $scope.winnerTrend === winnerTrend;
        }
        return false;
    }

    $scope.getDuelCount = function(size) {
        return new Array(size);
    }

    $scope.showTrendInfo = function(isVisible, trend) {
        $scope.trendInfo = trend;
        $scope.showTrendInfoBox = isVisible;
    }

    init();

});
