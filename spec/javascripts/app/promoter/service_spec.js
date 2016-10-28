describe("PromoterService", function(){
    var PromoterService, $cookies;
    beforeEach(module("trendOMeterApp"));
    beforeEach(inject(function(_PromoterService_, _$cookies_){
       PromoterService = _PromoterService_; 
       $cookies = _$cookies_;
    }));
    afterEach(function(){
        $cookies.remove("promoter");
    });
    it("should write a promoter flag in the cookie", function(){
        PromoterService.setPromoter();
        expect($cookies.get("promoter")).toBeDefined();
    });
    it("should tell whether this is a promoter device", function(){
        expect(PromoterService.isPromoter()).toBe(false);
        $cookies.put("promoter", "true");
        expect(PromoterService.isPromoter()).toBe(true);
    });
});
