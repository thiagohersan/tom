describe('Routes', function() {
    beforeEach(module('trendOMeterApp'));
    it('should map routes to controllers', inject(function($route) {
        expect($route.routes['/start'].controller).toEqual('StartController');
        expect($route.routes['/duels'].controller).toEqual('DuelsController');
    }));
});
