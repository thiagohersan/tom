// Create the angular application
var trendOMeterApp = angular.module('trendOMeterApp', ['ngCookies']);

trendOMeterApp.controller('Tc', function(UserService){
    alert(UserService);    
});
