describe('LocaleController', function() {
  var $scope, LocaleService, LocaleController, $rootScope, $location, $controller;
  var statusCode = 200;

  beforeEach(module('trendOMeterApp'));

  beforeEach(inject(function(_$rootScope_, _LocaleService_, _$controller_, _$location_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $location = _$location_;
    LocaleService = _LocaleService_;
    LocaleController = $controller('LocaleController', {$scope: $scope});
  }));

  describe('LocaleController.init', function() {
    beforeEach(function() {
      statusCode = 200;
      spyOn(LocaleService, "getLocale").and.returnValue({
        then: function(fn, fnerr) {
          if(statusCode==200){
            return fn({
              data: {
                locale: 'en'
              }
            });
          }else{
            return fnerr({
              status: 500 
            });
          }
        }
      });
      
    });


    it('should retrieve locale', function(){
      $scope.init();
      expect(LocaleService.getLocale.calls.count()).toEqual(1);
    });

    it('should set path to start', function() {
      $scope.init();
      expect($location.path()).toEqual('/promoter');
    });

    it('should set path to locale if there is an error', function() {
      statusCode = 500;
      $scope.init();
      expect($location.path()).toEqual('/locale');
    });
  });

});


