describe('LocaleController', function() {
  var $scope, LocaleService, LocaleController, $rootScope, $location, $controller;

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
      spyOn(LocaleService, "getLocale").and.returnValue({
        then: function(fn, fnerr) {
          return fn({
            locale: 'en'
          })
        }
      });
      
      $scope.init();
    });


    it('should retrieve locale', function(){
      expect(LocaleService.getLocale.calls.count()).toEqual(1);
    });

    it('should set path to start', function() {
      expect($location.path()).toEqual('/start');
    })
  });

});


