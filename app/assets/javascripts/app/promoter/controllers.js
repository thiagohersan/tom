trendOMeterApp.controller("PromoterController", function($location, PromoterService){
    PromoterService.setPromoter();
    $location.path("/start");
});
