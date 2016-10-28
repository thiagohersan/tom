describe("PromoterController", function(){
    var $scope, PromoterService, $controller, $rootScope, $cookies, $location;
    // Set the module
    beforeEach(module('trendOMeterApp'));

    // Add globals for any test
    beforeEach(inject(function(_$rootScope_, _$controller_, _PromoterService_, _$cookies_, _$location_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $cookies = _$cookies_;
        $location = _$location_;
        PromoterService = _PromoterService_;
        $cookies.remove("promoter");
    }));

    it("should redirect to /start", function(){
        $controller("PromoterController", { $scope: $scope });
        expect($location.path()).toBe("/start");
    });
    it("should set the device as promoter device", function(){
        $controller("PromoterController", { $scope: $scope });
        expect(PromoterService.isPromoter()).toBe(true);
    });
});
