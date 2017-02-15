app.controller('speakerController', function ($scope, $http) {
    $http.get('http://localhost:8000/api/speakers/').then(function (response) {
        $scope.speakerList = response.data;
    });
});