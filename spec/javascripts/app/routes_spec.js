describe('Routes', function() {
    beforeEach(module('trendOMeterApp'));
    it('should map routes to controllers', inject(function($route) {
        expect($route.routes['/start'].controller).toEqual('StartController');
        expect($route.routes['/start'].templateUrl).toEqual('/templates/start.html');
        expect($route.routes['/duels'].controller).toEqual('DuelsController');
        expect($route.routes['/duels'].templateUrl).toEqual('/templates/duels.html');
        expect($route.routes['/panel'].controller).toEqual('PanelController');
        expect($route.routes['/panel'].templateUrl).toEqual('/templates/panel.html');
        expect($route.routes['/promoter'].controller).toEqual('PromoterController');
        expect($route.routes['/promoter'].templateUrl).toEqual('/templates/start.html');
        expect($route.routes['/user'].controller).toEqual('UserController');
        expect($route.routes['/user'].templateUrl).toEqual('/templates/user.html');
    }));
});
