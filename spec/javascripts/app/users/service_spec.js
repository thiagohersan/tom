describe('UserService', function() {
    var $httpBackend, $cookies, UserService, user_id;

    // Set the module
    beforeEach(module('trendOMeterApp'));

    // Add globals for any test
    beforeEach(inject(function($injector) {
        user_id = Math.ceil(Math.random() * 100);
        $httpBackend = $injector.get('$httpBackend');
        UserService = $injector.get('UserService');
        $cookies = $injector.get('$cookies');
    }));

    it('should create an anonymous user when starting the quiz', function(done){
        // Create a response for /users
        $httpBackend.when('POST', '/users', {anonym: true}).respond(201, {
            id: user_id,
            anonym: true
        });

        inject(function($injector) {
            user = UserService.createAnonymous(done).then(function(response){
                // Check if request is done
                expect(response.status).toEqual(201);
                expect(response.data.id).toEqual(user_id);
                expect(response.data.anonym).toEqual(true);

                // Check if user_if cookies are created
                expect($cookies.get('user_id')).toEqual(user_id);
            }, function(response){
                expect(1).toEqual(2);    
            }).finally(done);
            $httpBackend.flush();
        });
    });

    it('should check if an user is logged', function(done){
        inject(function($injector) {
            expect(UserService.getLogged()).toBeDefined()
            // Create a cookie to simulate a logged user
            $cookies.set('user_id', user_id);
            expect(UserService.getLogged()).toEqual(user_id);
        });
    });
});
