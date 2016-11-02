describe('StartController', function() {
  var $scope, StartController, UserService, $controller, $rootScope, $cookies, $location;
  // Set the module
  beforeEach(module('trendOMeterApp'));

  // Add globals for any test
  beforeEach(inject(function(_$rootScope_, _$controller_, _UserService_, _$cookies_, _$location_) {
    UserService = _UserService_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $cookies = _$cookies_;
    $location = _$location_;
    StartController = $controller('StartController', {$scope: $scope});
  }));

  it('should set loading equal true on $scope.start() is called', function(){
    expect($scope.loading).toEqual(false);
    $scope.start();
    expect($scope.loading).toEqual(true);
  });

  describe('UserService.createAnonymous', function(){
    beforeEach(function(){
      spyOn(UserService, "createAnonymous").and.returnValue({
        then: function(fn){
          // Check if is loading before response the promise.
          expect($scope.loading).toEqual(true);

          return fn({
            status: 201,
            data: {
              id: 1,
              anonymous: true
            }
          })
        }
      });
    });

    afterEach(function() {
      $cookies.remove('user_id');
    });

    it('should set loading equal false on creating a anonymous user', function(){
      // Init the controller
      $scope.start();
      expect(UserService.createAnonymous.calls.count()).toEqual(1);
      expect($scope.loading).toEqual(false);
    });
   
    it('should not call createAnonymous when given a cookie before', function() {
      $cookies.put('user_id',1);
      $scope.start();
      expect(UserService.createAnonymous.calls.count()).toEqual(0);
    });

    it('should call redirect after starting', function() {
      spyOn($scope, "redirect").and.callThrough();
      $scope.start();
      expect($scope.redirect.calls.count()).toEqual(1);
    });

    it('should redirect to /duels on redirect call', function() {
      $scope.redirect();
      expect($location.path()).toEqual('/duels');
    });
  });

  describe('UserService.createAnonymous invalid', function(){
    beforeEach(function(){
      spyOn(UserService, "createAnonymous").and.returnValue({
          then: function(success, error){
              // Check if is loading before response the promise.
              expect($scope.loading).toEqual(true);

              return error({
                  status: 500,
                  data: {
                      id: 1,
                      anonymous: true
                  }
              })
          }
      });
    });

    it('should show error message', function() {
      expect($scope.error).toBeFalsy();
      $scope.start();
      expect($scope.error).toBeTruthy();
    });
  });

  describe('UserService.createAnonymous on a promoter device', function(){
    var PromoterService;
    beforeEach(inject(function(_PromoterService_){
      PromoterService = _PromoterService_;
    }));
    it('should forget previous user_id', function(){
      spyOn(UserService, "createAnonymous").and.returnValue({
        then: function(fn){
          return fn({
            status: 201,
            data: {
                id: 2,
                anonymous: true
            }
          })
        }
      });
      $cookies.put('user_id', '1');
      PromoterService.setPromoter();
      $scope.start();
      expect(UserService.createAnonymous.calls.count()).toBe(1);
    });
  });
});
describe('UserController', function() {
  var UserController, UserService, IndustryService, OccupationService, $scope, 
      $controller, $rootScope, $cookies, $location, industriesStatusCode,
      occupationStatusCode, industryData, occupationData;
  // Set the module
  beforeEach(module('trendOMeterApp'));

  // Add globals for any test
  beforeEach(inject(function(_$rootScope_, _$controller_, _UserService_, _IndustryService_, _OccupationService_, _$cookies_, _$location_) {
    UserService = _UserService_;
    $controller = _$controller_;
    IndustryService = _IndustryService_;
    OccupationService = _OccupationService_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $cookies = _$cookies_;
    $location = _$location_;

    industriesStatusCode = 200;
    occupationStatusCode = 200;

    industryData = [
      {"id":1,"name":"Agricultura e Mineração"},
      {"id":2,"name":"Serviços Empresariais"},
      {"id":3,"name":"Computadores e Eletrônicos"}
    ];
    occupationData = [
      {"id":1,"name":"Executivo C-Level"},
      {"id":2,"name":"VP ou Diretor(a)"},
      {"id":3,"name":"Gerente de Projeto"}
    ];

    spyOn(IndustryService, "all").and.returnValue({
      then: function(fn, errFn) {
        if(industriesStatusCode === 200) {
          fn({
            status: industriesStatusCode,
            data: industryData 
          });
        } else {
          fn({
            status: industriesStatusCode,
            data: industryData 
          });
        }
      }
    });    
    spyOn(OccupationService, "all").and.returnValue({
      then: function(fn, errFn) {
        if(occupationStatusCode === 200) {
          fn({
            status: occupationStatusCode,
            data: occupationData 
          });
        } else {
          fn({
            status: occupationStatusCode,
            data: occupationData 
          });
        }
      }
    });    
  }));

  it('should get the industry list on start the controller', function() {
    $controller('UserController', {$scope: $scope});
    expect(IndustryService.all.calls.count()).toEqual(1);
    expect(OccupationService.all.calls.count()).toEqual(1);

    expect($scope.industries).toEqual(industryData);
    expect($scope.occupations).toEqual(occupationData);
  });

  it('should set a error flag on industry service error', function() {
    industriesStatusCode = 500;
    $controller('UserController', {$scope: $scope});

    expect($scope.dependencyError).toEqual(true);
  });

  it('should set a error flag on occupation service error', function() {
    occupationStatusCode = 500;
    $controller('UserController', {$scope: $scope});

    expect($scope.dependencyError).toEqual(true);
  });

  it('should set loading false if industries and occupations are loaded', function() {
    $controller('UserController', {$scope: $scope});
    expect($scope.loadingIndustries).toEqual(false);
    expect($scope.loadingOccupations).toEqual(false);
    expect($scope.loading()).toEqual(false);

    $scope.loadingIndustries = true;
    expect($scope.loading()).toEqual(true);

    $scope.loadingOccupations = true;
    expect($scope.loading()).toEqual(true);
    
    $scope.loadingIndustries = false;
    expect($scope.loading()).toEqual(true);

    // Cancel loading on dependencyError
    $scope.loadingIndustries = true;
    $scope.loadingOccupations = true;
    $scope.dependencyError = true;
    expect($scope.loading()).toEqual(false);
  });
});
