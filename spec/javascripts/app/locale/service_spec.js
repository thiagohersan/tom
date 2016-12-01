describe("LocaleService", function(){
  var LocaleService, $httpBackend;

  beforeEach(module("trendOMeterApp"));
  beforeEach(inject(function($injector){
    LocaleService = $injector.get('LocaleService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('LocaleService', function(){
    it('should retrieve the locale', function(done){

      $httpBackend.when('GET', '/locale').respond(200, {locale: 'en'});
      LocaleService.getLocale().then(function(response){
        expect(response.data.locale).toEqual('en');
      }).finally(done);

      $httpBackend.flush();
    });
  });
});
