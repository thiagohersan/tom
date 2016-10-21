trendOMeterApp.factory('UserService', function($http, $cookies){
    return { 
        createAnonymous: function() {
            var xhr = $http.post('/users', {anonym: true});
            // Set the cookie
            xhr.then(function(response) {
            	$cookies.put('user_id', response.data.id);
            });
            return xhr;
        },

        getLoggedID: function() {
        	return parseInt($cookies.get('user_id'));
        }
    } 
});


