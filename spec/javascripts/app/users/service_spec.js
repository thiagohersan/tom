describe('UserService', function() {
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

    it('should check if an user is logged', function(){
        $cookies.remove('user_id');
        expect(UserService.getLoggedID()).toBeUndefined()
        // Create a cookie to simulate a logged user
        $cookies.put('user_id', user_id);
        expect(UserService.getLoggedID()).toEqual(user_id);
    });
});
