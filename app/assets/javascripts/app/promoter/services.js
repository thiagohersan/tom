trendOMeterApp.factory("PromoterService", function($cookies){
    return {
        setPromoter: function(){
            $cookies.put("promoter", "true");
        },
        isPromoter: function(){
            return $cookies.get("promoter") !== undefined
        }
    }
});
