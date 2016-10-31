trendOMeterApp.controller('PanelController', function($scope, PanelService, $location, $timeout) {
    $scope.loading = true; 

    function init() {
        PanelService.getTrends().then(function(response) {
            $scope.panelTrends = response.data;
            $scope.loading = false;
        });
    }

    $scope.users = function() {
        $location.path('/users');
    }

    init();
});
