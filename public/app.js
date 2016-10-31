angular.module("socketApp", [])
.controller("mainCtrl", function($scope){

    //TODO SOCKET THINGSSSSSZZ
    const socket = io.connect();

    $scope.showLogin = true;
    $scope.users     = [];
    $scope.messages  = [];


    $scope.newUser = username => {
        if(username){
            $scope.showLogin = !$scope.showLogin;
            //TODO
            socket.emit("new user", username);
        }
    }

    $scope.sendMessage = message => {
        if(message){
            //TODO
            socket.emit("send message", message);
        }
    }

    socket.on("update users", data => {
      $scope.users = data;
      $scope.$apply();
    });

    socket.on("get message", data => {
      $scope.messages.push(data);
      $scope.$apply();
    });

});
