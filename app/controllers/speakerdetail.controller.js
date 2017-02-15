app.controller('speakerDetailController', function($routeParams, $scope, $http){
    $http.get(devurl + '/api/speaker/' + $routeParams.id + '/details/').then(function(response) {
       $scope.profile = response.data;
    });

});