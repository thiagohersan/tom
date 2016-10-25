describe('DuelsController', function(){
    var $scope, StartController, DuelService, $controller, $rootScope, $cookies, $location, dummyDuels, dummyDuel;
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

        dummyDuel = {
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
            skipped: false
        };
        dummyDuels = [dummyDuel];
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

        it('should call finish if there is no more duels', function() {
            spyOn($scope, 'finish').and.callThrough();
            $scope.duels = [];
            $scope.getCurrentDuel();
            expect($scope.finish.calls.count()).toEqual(1);
            expect($location.path()).toEqual('/finish');
        });

        it('should paginate duels according to their position', function() {
            $scope.duels = [];

            for (var i = 0; i < $scope.totalDuels; i++) {
                $scope.duels.push(dummyDuel);
            }

            expect($scope.totalDuels).toEqual(12);

            $scope.getCurrentDuel();
            expect($scope.getCurrentPage()).toEqual(1);
            
            $scope.getCurrentDuel();
            expect($scope.getCurrentPage()).toEqual(2);
        });

        describe('SaveAction', function() {
            var promise, response;
            
            beforeEach(function() {
                promise = { 
                    then: function(fn) {
                        fn(response);
                    } 
                };
                response = {
                    status: 204,
                    data: ''
                };

                $scope.currentDuel = dummyDuel;
                spyOn($scope, 'getCurrentDuel').and.callThrough();
                spyOn(promise, 'then').and.callThrough();
            });   

            it('should set saving flag to true while saving', function(){
                expect($scope.saving).toBeFalsy();
                
                promise.then = function(fn) {
                    expect($scope.saving).toBeTruthy();
                    fn(response);
                    expect($scope.saving).toBeFalsy();
                }

                $scope.saveAction(promise);

                response.status = 500;
                $scope.saveAction(promise);
            });

            it('should go to the next duel on success', function() {
                $scope.saveAction(promise);
                expect(promise.then.calls.count()).toEqual(1);
                expect($scope.getCurrentDuel.calls.count()).toEqual(1);
            });

            it('should set the error flag when the status code is different than 204', function() {
                response.status = 500;

                expect($scope.error).toBeFalsy();
                $scope.saveAction(promise);
                expect($scope.error).toBeTruthy();

                // keep on the same duel if error.
                expect($scope.getCurrentDuel.calls.count()).toEqual(0);

                response.status = 204;
                $scope.saveAction(promise);
                expect($scope.error).toBeFalsy();
            });
            
            it('should consume the service and call saveaction on executing skip', function() {
                spyOn(DuelService, 'skip').and.returnValue(promise);
                spyOn($scope, 'saveAction').and.callThrough();

                $scope.skip();

                expect(DuelService.skip.calls.count()).toEqual(1);
                expect($scope.saveAction.calls.count()).toEqual(1);
            });
            
            it('should use the currentDuel when calling skip service', function() {
                DuelService.skip = function(duel_id) {
                    expect(duel_id).toEqual($scope.currentDuel.id);
                    return promise;
                }
                spyOn(DuelService, 'skip').and.callThrough();
                spyOn($scope, 'saveAction').and.callThrough();

                $scope.skip();
            });
            
            it('should consume the service and call saveAction on executing winner', function() {
                spyOn(DuelService, 'setWinner').and.returnValue(promise);
                spyOn($scope, 'saveAction').and.callThrough();

                $scope.winner(dummyDuel.first_trend);

                expect(DuelService.setWinner.calls.count()).toEqual(1);
                expect($scope.saveAction.calls.count()).toEqual(1);
            });
            
            it('should use the currentDuel when calling setWinner service', function() {
                DuelService.setWinner = function(duel_id, trend_id) {
                    expect(duel_id).toEqual($scope.currentDuel.id);
                    expect(trend_id).toEqual(dummyDuel.first_trend.id);
                    return promise;
                }
                spyOn(DuelService, 'setWinner').and.callThrough();
                spyOn($scope, 'saveAction').and.callThrough();

                $scope.winner(dummyDuel.first_trend);
            });
        });
    });
    it('should redirect to /start if there is no user_id', function() {
        $cookies.remove('user_id');
        $controller('DuelsController', {$scope: $scope});
        expect($location.path()).toEqual('/start');    
    });
});
