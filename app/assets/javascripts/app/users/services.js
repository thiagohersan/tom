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
        	    return user_id;
            }
        },
        save: function(data) {
          if(this.getLoggedID() === undefined)
            throw 'no user_id';

          data.id = this.getLoggedID();
          return $http.patch('/users/', data)
        },
        setCompleted: function() {
          $cookies.put('completed', true);
        },
        isCompleted: function() {
          return $cookies.get('completed') == 'true';
        },
        unset: function() {
          $cookies.remove('user_id');
          $cookies.remove('completed');
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
trendOMeterApp.factory('AreaService', function ($http) {
    return {
        all: function () {
            return $http.get('/areas');
        }
    }
});
trendOMeterApp.factory('RoleService', function($http) {
  return {
    all: function() {
      return $http.get('/roles');
    }
  }
});
