describe('StartController', function() {
    var $scope, StartController, UserService, $controller, $rootScope, $cookies, $location;
    // Set the module
    beforeEach(module('trendOMeterApp'));

    // Add globals for any test
    beforeEach(inject(function(_$rootScope_, _$controller_, _UserService_, _$cookies_, _$location_) {
        UserService = _UserService_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $cookies = _$cookies_;
        $location = _$location_;
        StartController = $controller('StartController', {$scope: $scope});
    }));

    it('should set loading equal true on $scope.start() is called', function(){
        expect($scope.loading).toEqual(false);
        $scope.start();
        expect($scope.loading).toEqual(true);
    });

    describe('UserService.createAnonymous', function(){
        beforeEach(function(){
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
        });

        afterEach(function() {
            $cookies.remove('user_id');
        });

        it('should set loading equal false on creating a anonymous user', function(){
            // Init the controller
            $scope.start();
            expect(UserService.createAnonymous.calls.count()).toEqual(1);
            expect($scope.loading).toEqual(false);
        });
       
        it('should not call createAnonymous when given a cookie before', function() {
            $cookies.put('user_id',1);
            $scope.start();
            expect(UserService.createAnonymous.calls.count()).toEqual(0);
        });

        it('should call redirect after starting', function() {
            spyOn($scope, "redirect").and.callThrough();
            $scope.start();
            expect($scope.redirect.calls.count()).toEqual(1);
        });

        it('should redirect to /duel on redirect call', function() {
            $scope.redirect();
            expect($location.path()).toEqual('/duel');
        });
    });

    describe('UserService.createAnonymous invalid', function(){
        beforeEach(function(){
            spyOn(UserService, "createAnonymous").and.returnValue({
                then: function(fn){
                    // Check if is loading before response the promise.
                    expect($scope.loading).toEqual(true);

                    return fn({
                        status: 500,
                        data: {
                            id: 1,
                            anonym: true
                        }
                    })
                }
            });
        });

        it('should show error message', function() {
            expect($scope.error).toBeFalsy();
            $scope.start();
            expect($scope.error).toBeTruthy();
        });
    });
});
