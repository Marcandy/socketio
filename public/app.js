angular.module("socketApp", [])
.controller("mainCtrl", function($scope){

    //TODO SOCKET THINGSSSSSZZ

    $scope.showLogin = true;
    $scope.users     = [];
    $scope.messages  = [];

    $scope.newUser = username => {
        if(username){
            $scope.showLogin = !$scope.showLogin;
            //TODO
        }
    }

    $scope.sendMessage = message => {
        if(message){
            //TODO
        }
    }

});
