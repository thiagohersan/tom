trendOMeterApp.controller('DuelsController', function($scope,UserService, DuelService, $location, $timeout) {
    $scope.loading = true; 
    $scope.duels = [];
    $scope.currentDuel = null;
    $scope.totalDuels = 11;
    $scope.error = false;
    $scope.saving = false;
    $scope.winnerTrend = null;
    $scope.showTrendInfoBox = false;
    $scope.trendInfo = null;
    $scope.serverError = false;

    $scope.init = function() {
        var user_id = UserService.getLoggedID();
        $scope.loading = true;
        $scope.serverError = false;

        if(!user_id){
            $location.path('/start');
            return;
        }
        DuelService.createDuels(user_id).then(function(response) {
            $scope.duels = response.data;
            $scope.loading = false;
            $scope.getCurrentDuel();
        }, function(response){
            $scope.loading = false;
            if (response.status == 403) {
              UserService.unset();
              $location.path('/start');
            } else {
              $scope.serverError = true;
            }
        });
    }

    $scope.getCurrentDuel = function() {
        if($scope.duels.length == 0){
            $scope.finish();
        }
        $scope.showTrendInfoBox = false;
        $scope.currentDuel = $scope.duels.shift();
    };

    $scope.finish = function() {
        $location.path('/panel');
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
        if($scope.saving) return
        $scope.saveAction(
          DuelService.skip(
            UserService.getLoggedID(),
            $scope.currentDuel.id
          )
        );
    }

    $scope.winner = function(winnerTrend) {
        $scope.saveAction(
          DuelService.setWinner(
            UserService.getLoggedID(),
            $scope.currentDuel.id,
            winnerTrend.id
          )
        );    
    }

    $scope.setWinner = function(winnerTrend) {
        if($scope.saving) return
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

    $scope.init();

});
