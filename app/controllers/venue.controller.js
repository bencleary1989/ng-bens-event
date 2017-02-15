app.controller('venueController', function($scope,$http) {
    $http.get(devurl + "/api/venue/details/").then(function(response) {
        $scope.venue = response.data;
    });
})