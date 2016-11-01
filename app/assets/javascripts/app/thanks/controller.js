trendOMeterApp.controller('ThanksController', function($scope, $location, $timeout) {
    $scope.start = function() {
        $location.path('/duels');
    }

    $scope.panel = function() {
        $location.path('/panel');
    }
});

