trendOMeterApp.controller('PanelController', function($scope, PanelService, UserService, $location, $timeout) {
    $scope.loading = true; 

    function addPosition(data){
        var array = [];
        data.map(function(item){
            item['position'] = data.indexOf(item) + 1;
            array.push(item);
        });
        return array;
    }
    function init() {
        PanelService.getTrends().then(function(response) {
            var data = addPosition(response.data);
            $scope.trends = {}
            if(response.data.length < 7){
                $scope.trends.first = data[0];
                $scope.trends.second = data[1];
                $scope.trends.third = data[2];
                $scope.trends.antepenult = data[3];
                $scope.trends.penultimate = data[4];
                $scope.trends.last = data[5];
            }else{
                $scope.trends.first = data[0];
                $scope.trends.second = data[1];
                $scope.trends.third = data[2];
                $scope.trends.antepenult = data[data.length - 3];
                $scope.trends.penultimate = data[data.length - 2];
                $scope.trends.last = data[data.length - 1];
                $scope.trends.split = true;
            } 
            $scope.loading = false;
        });
    }

    $scope.showUserForm = function() {
        return !UserService.isCompleted();
    }
    $scope.users = function() {
        $location.path('/user');
    }

    init();
});
