describe('UserService', function() {
    var $scope, StartController, UserService, $controller, $rootScope;
    // Set the module
    beforeEach(module('trendOMeterApp'));

    // Add globals for any test
    beforeEach(inject(function(_$rootScope_, _$controller_, _UserService_) {
        UserService = _UserService_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

    it('should set loading equal true on $scope.start() is called', function(){
        StartController = $controller('StartController', {$scope: $scope});
        expect($scope.loading).toEqual(false);
        $scope.start();
        expect($scope.loading).toEqual(true);
        // expect(UserService.createAnonymous.calls.count()).toEqual(1);
    });

    it('should set loading equal false on creating a anonymous user', function(){
        spyOn(UserService, "createAnonymous").and.returnValue({
            then: function(fn){
                // Check if is loading before response the promise.
                expect($scope.loading).toEqual(true);

                return fn({
                    status: 201,
                    data: {
                        id: 1,
                        anonym: true
                    }
                })
            }
        });
        // Init the controller
        StartController = $controller('StartController', {$scope: $scope});
        $scope.start();
        expect(UserService.createAnonymous.calls.count()).toEqual(1);
        expect($scope.loading).toEqual(false);
    });
});
