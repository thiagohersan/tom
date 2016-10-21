trendOMeterApp.factory('UserService', function($http){
    return { 
        createAnonymous: function() {
            return $http.post('/users', {anonym: true})
        }
    } 
})
