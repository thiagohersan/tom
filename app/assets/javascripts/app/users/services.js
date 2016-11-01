trendOMeterApp.factory('UserService', function($http, $cookies){
    return { 
        createAnonymous: function() {
            return $http.post('/users', {anonymous: true}).then(function(response) {
            	$cookies.put('user_id', response.data.id);
                return response;
            });
        },
        getLoggedID: function() {
            var user_id = $cookies.get('user_id');
            if(user_id !== undefined){
        	    return parseInt(user_id);
            }
        }
    } 
});
trendOMeterApp.factory('IndustryService', function($http) {
  return {
    all: function() {
      return $http.get('/industries');
    }
  }
});
trendOMeterApp.factory('OccupationService', function($http) {
  return {
    all: function() {
      return $http.get('/occupations');
    }
  }
});
