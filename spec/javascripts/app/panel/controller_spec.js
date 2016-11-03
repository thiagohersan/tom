describe('PanelController', function(){
    var $scope, $controller, $rootScope, $cookies, $location, UserService;

    // Set the module
    beforeEach(module('trendOMeterApp'));

    // Add globals for any test
    beforeEach(inject(function(_$rootScope_, _$controller_, _DuelService_, _$cookies_, _$location_, _UserService_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $cookies = _$cookies_;
        $location = _$location_;
        UserService = _UserService_;
    }));
    describe('PanelController.users', function(){
        it('should go to user register screen', function(){
            $controller('PanelController', {$scope: $scope});
            $scope.users();
            expect($location.path()).toEqual('/user');
        });
    });
    
    it('should show user form', function() {
      $controller('PanelController', {$scope: $scope});
      expect($scope.showUserForm()).toEqual(true);
    });
    
    it('should hide user form if user submit the form', function() {
      UserService.setCompleted();
      $controller('PanelController', {$scope: $scope});
      expect($scope.showUserForm()).toEqual(false);
    });
});
