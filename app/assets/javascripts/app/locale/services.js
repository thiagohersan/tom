trendOMeterApp.factory('LocaleService', function($http) {
  return {
    getLocale: function() {
      return $http.get('/locale');
    }
  }
});
