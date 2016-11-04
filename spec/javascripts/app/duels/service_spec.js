describe('DuelService', function() {
    var $httpBackend, dummyDuels, DuelService, duel_id;
    
    // Set the module
    beforeEach(module('trendOMeterApp'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        DuelService = $injector.get('DuelService');
        duel_id = 1;
        dummyDuels = [{
            id: duel_id,
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

    it('should return duels from API', function(done) {
        $httpBackend.when('POST', '/duels', {user_id: 1}).respond(201, dummyDuels);
        DuelService.createDuels(1).then(function(response) {
            expect(response.status).toEqual(201);
            expect(response.data).toEqual(dummyDuels);
        }).finally(done); 
        
        $httpBackend.flush();
    });

    it('should set the winner trend', function(done) {
        $httpBackend.when('PATCH', '/duels/' + duel_id, {
          'winner_trend_id': 1,
          'user_id': 'hashed=='
        }).respond(204, '');
        DuelService.setWinner('hashed==', duel_id, 1).then(function(response){
            expect(response.status).toEqual(204);
        }).finally(done);
        $httpBackend.flush();
    });

    it('should skip a duel', function(done) {
        $httpBackend.when('PATCH', '/duels/' + duel_id, {
          'skipped': true,
          'user_id': 'hashed=='
        }).respond(204, '');
        DuelService.skip('hashed==', duel_id).then(function(response){
            expect(response.status).toEqual(204);
        }).finally(done);
        $httpBackend.flush();
    });
});
