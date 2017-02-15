app.controller('registerController', function($scope, registered) {
    registered.check("Thanks for registering, ");
    $scope.registered = registered.welcomeBar;
    $scope.message = registered.message;
});