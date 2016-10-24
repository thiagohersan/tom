describe('DuelsController', function(){
    var $scope, StartController, DuelService, $controller, $rootScope, $cookies, $location, dummyDuels;
    // Set the module
    beforeEach(module('trendOMeterApp'));

    // Add globals for any test
    beforeEach(inject(function(_$rootScope_, _$controller_, _DuelService_, _$cookies_, _$location_) {
        DuelService = _DuelService_;
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $cookies = _$cookies_;
        $location = _$location_;
        
        // Set the cookie of user
        $cookies.put('user_id', 1);

        dummyDuels = [{
            id: 1,
            user_id: 1,
            first_trend: {
                id: 2,
                name: 'trend1',
                description: 'description1'
            },
            second_trend: {
                id: 3,
                name: 'trend2',
                description: 'description2'
            },
            winner_trend_id: null,
            skipped: false}];
    }));

    afterEach(function(){
        $cookies.remove('user_id');
    });

    describe('DuelService.createDuels', function(){
        beforeEach(function(){
            spyOn(DuelService, "createDuels").and.returnValue({
                then: function(fn){
                    // Check if is loading before response the promise.
                    expect($scope.loading).toEqual(true);

                    return fn({
                        status: 201,
                        data: dummyDuels
                    })
                }
            });
            $controller('DuelsController', {$scope: $scope});
        });

        it('should set loading to false after call the DuelService.createDuels', function(){
            expect(DuelService.createDuels.calls.count()).toEqual(1);
            expect($scope.loading).toEqual(false);
        });

        it('should get all duels from the DuelService', function(){
            expect($scope.duels).toEqual(dummyDuels);
        });

        it('should get current duel', function(){
            var expectedCurrentDuel = $scope.duels[0];
            $scope.getCurrentDuel();
            expect($scope.currentDuel).toEqual(expectedCurrentDuel);
            expect($scope.duels.length).toEqual(0);
        });
    });
});
