app.controller('rootController', function($scope, registered){
    registered.check("Welcome, ");
    $scope.message = registered.message;
    $scope.welcomeBar = registered.welcomeBar;
});