trendOMeterApp.controller('PanelController', function($scope, PanelService, $location, $timeout) {
    $scope.loading = true; 

    function init() {
        PanelService.getTrends().then(function(response) {
            $scope.trends = {}
            if(response.data.length > 5){
                $scope.trends.first = response.data[0];
                $scope.trends.second = response.data[1];
                $scope.trends.third = response.data[2];
                $scope.trends.antepenult = response.data[3];
                $scope.trends.penultimate = response.data[4];
                $scope.trends.last = response.data[5];
            }else{
                $scope.trends.first = response.data[0];
                $scope.trends.second = response.data[1];
                $scope.trends.third = response.data[2];
                $scope.trends.antepenult = response.data[response.data.length - 3];
                $scope.trends.penultimate = response.data[response.data.length - 2];
                $scope.trends.last = response.data[response.data.length - 1];
            } 
            $scope.loading = false;
        });
    }

    $scope.users = function() {
        $location.path('/users');
    }

    init();
});
