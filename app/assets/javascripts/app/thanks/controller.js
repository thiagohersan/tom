trendOMeterApp.controller('ThanksController', function($scope, $location, PromoterService) {
    $scope.start = function() {
        $location.path('/duels');
    }

    $scope.panel = function() {
        $location.path('/panel');
    }
    
    $scope.hasEndButton = function() {
      return PromoterService.isPromoter();
    }
});

