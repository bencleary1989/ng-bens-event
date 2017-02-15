app.controller('agendaController', function($scope, $http) {
    $http.get('http://localhost:8000/api/sessions/').then(function(response) {
        $scope.agenda = response.data;
        console.log($scope.agenda);
    });
});