describe('Service of user', function() {
  var $httpBackend, $cookies, UserService, user_id;

  // Set the module
  beforeEach(module('trendOMeterApp'));

  // Add globals for any testbeforeEach(inject(function($injector) {
  beforeEach(inject(function($injector) {
    user_id = Math.ceil(Math.random() * 100);
    $httpBackend = $injector.get('$httpBackend');
    $cookies = $injector.get('$cookies');
    UserService = $injector.get('UserService');
  }));

  describe('UserService', function() {
    it('should create an anonymous user when starting the quiz', function(done){
      // Create a response for /users
      var user_id = Math.ceil(Math.random() * 100);

      $httpBackend.when('POST', '/users', {anonymous: true}).respond(201, {
          id: user_id,
          anonymous: true
      });

      user = UserService.createAnonymous().then(function(response){
        // Check if request is done
        expect(response.status).toEqual(201);
        expect(response.data.id).toEqual(user_id);
        expect(response.data.anonymous).toEqual(true);

        // Check if user_if cookies are created
        expect($cookies.get('user_id')).toEqual(user_id.toString());
        // Finish the test
      }).finally(done);

      $httpBackend.flush();
    });

    it('should check if an user is logged', function() {
      UserService.unset();
      expect(UserService.getLoggedID()).toBeUndefined()
      // Create a cookie to simulate a logged user
      $cookies.put('user_id', user_id);
      expect(UserService.getLoggedID()).toEqual(user_id);
    });

    it('should update the user data', function() {
      $cookies.put('user_id', user_id);
      var data = {
        name: "User name",
        email: "user@email.com",
        company: "User Company",
        industry_id: 1,
        occupation_id: 1
      }
      $httpBackend.when('PATCH', '/users/' + user_id, data).respond(200, '');

      user = UserService.save(data).then(function(response) {
        expect(response.status).toEqual(200);
      }, function(response) {
        expect(response.status).toEqual(200);
      });

      $httpBackend.flush();
    });

    it('should set user as completed', function() {
      UserService.setCompleted();
      expect(UserService.isCompleted()).toEqual(true);
    });

    it('should set completed if as completed cookie', function() {
      $cookies.put('completed', true);
      expect(UserService.isCompleted()).toEqual(true);
      $cookies.remove('completed');
      expect(UserService.isCompleted()).toEqual(false);
    });

    it('should throw error if no user cookie', function() {
      UserService.unset();
      expect(function() { UserService.save(); }).toThrow('no user_id');
    });

    it('should remove all user cookies', function() {
      $cookies.put('user_id', 1);
      $cookies.put('completed', true);

      UserService.unset();

      expect($cookies.get('user_id')).toBeUndefined();
      expect($cookies.get('completed')).toBeUndefined();
    });
  });

  describe('IndustryService', function() {
    var IndustryService; 

    beforeEach(inject(function($injector) {
      IndustryService = $injector.get('IndustryService');
    }));
    it('should get all industries from /industries', function() {
      $httpBackend.when('GET', '/industries').respond(200, [
        {"id":1,"name":"Agricultura e Mineração"},
        {"id":2,"name":"Serviços Empresariais"},
        {"id":3,"name":"Computadores e Eletrônicos"}
      ]);

      IndustryService.all().then(function(response){
        expect(response.status).toEqual(200);
        expect(response.data.length).toEqual(3);
      }, function(response) {
        expect(1).toEqual(2);
      });
      $httpBackend.flush();
    });
  });

  describe('OccupationService', function() {
    var OccupationService; 

    beforeEach(inject(function($injector) {
      OccupationService = $injector.get('OccupationService');
    }));
    it('should get all industries from /occupations', function() {
      $httpBackend.when('GET', '/occupations').respond(200, [
        {"id":1,"name":"Executivo C-Level"},
        {"id":2,"name":"VP ou Diretor(a)"},
        {"id":3,"name":"Gerente de Projeto"}
      ]);

      OccupationService.all().then(function(response){
        expect(response.status).toEqual(200);
        expect(response.data.length).toEqual(3);
      }, function(response) {
        expect(1).toEqual(2);
      });
      $httpBackend.flush();
    });
  });
});
