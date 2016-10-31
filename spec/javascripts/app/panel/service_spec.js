describe('PanelService', function() {
    var $httpBackend, $cookies, PanelService;

    // Set the module
    beforeEach(module('trendOMeterApp'));

    // Add globals for any testbeforeEach(inject(function($injector) {
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $cookies = $injector.get('$cookies');
        PanelService = $injector.get('PanelService');
    }));

    dummyTrends = [];

    it('should return trend relevance from API', function(done) {
        $httpBackend.when('GET', '/panel').respond(200, dummyTrends);
        PanelService.getTrends().then(function(response) {
            expect(response.status).toEqual(200);
            expect(response.data).toEqual(dummyTrends);
        }).finally(done);

        $httpBackend.flush();
    });
});
