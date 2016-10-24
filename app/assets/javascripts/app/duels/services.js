trendOMeterApp.factory('DuelService', function($http){
    return {
        createDuels: function(user_id) {
            return $http.post('/duels', {user_id: user_id});
        },
        setWinner: function(duel_id, winner_trend_id) {
            return $http.patch('/duels/' + duel_id, {winner_trend_id: winner_trend_id});
        },
        skip: function(duel_id) {
            return $http.patch('/duels/' + duel_id, {skipped: true});
        }
    }
});
