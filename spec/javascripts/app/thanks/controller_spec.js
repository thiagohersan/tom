describe("ThanksController", function(){

  var $location, $controller, $rootScope , $scope= null;
  beforeEach(module("trendOMeterApp"));
  beforeEach(inject(function(_$location_, _$controller_, _$rootScope_){
    $location = _$location_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller('ThanksController', { $scope: $scope });
  }));

  it("should redirect to /duels when start() is invoked", function(){
    $scope.start(); 
    expect($location.path()).toEqual("/duels"); 
  });
  it("should redirect to /panel", function(){
    $scope.panel(); 
    expect($location.path()).toEqual("/panel"); 
  });
  it("should show end button if it is a promoter device",
    inject(function(PromoterService){
      spyOn(PromoterService, "isPromoter").and.returnValue(true);
      expect($scope.hasEndButton()).toEqual(true);
    }
  ));
  it("should hide end button if it is not a promoter device",
    inject(function(PromoterService){
      spyOn(PromoterService, "isPromoter").and.returnValue(false);
      expect($scope.hasEndButton()).toEqual(false);
    }
  ));
});
