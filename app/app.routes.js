app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/pages/index/index.html',
            controller: 'rootController'
        })
        .when('/register', {
            templateUrl: '/app/pages/register/register.html',
            controller: 'registerController'
        })
        .when('/speakers', {
            templateUrl: '/app/pages/speakers/speakers.html',
            controller: 'speakerController'
        })
        .when('/speaker/detail/:id', {
            templateUrl: '/app/pages/speakers/speaker.detail.html',
            controller: 'speakerDetailController'
        })
        .when('/agenda', {
            templateUrl: '/app/pages/agenda/agenda.html',
            controller: 'agendaController'
        })
        .when('/venue', {
            templateUrl: '/app/pages/venue/venue.html',
            controller: 'venueController'
        });

    $locationProvider.html5Mode(true);
});