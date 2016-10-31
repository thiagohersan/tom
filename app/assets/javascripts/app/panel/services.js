trendOMeterApp.factory('PanelService', function($http){
    return {
        getTrends: function(){
            return $http.get('/panel');
        }
    }
});
