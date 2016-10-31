describe('PanelController', function(){
    var $scope, $controller, $rootScope, $cookies, $location;

    // Set the module
    beforeEach(module('trendOMeterApp'));

    // Add globals for any test
    beforeEach(inject(function(_$rootScope_, _$controller_, _DuelService_, _$cookies_, _$location_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $cookies = _$cookies_;
        $location = _$location_;
    }));
    describe('PanelController.goToUsers', function(){
        it('should go to user register screen', function(){
            $controller('PanelController', {$scope: $scope});
            $scope.goToUsers();
            expect($location.path()).toEqual('/users');
        });
    });
});
