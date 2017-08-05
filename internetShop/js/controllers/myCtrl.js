app.controller('MyCtrl', ['$scope','UserService', function($scope,UserService) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
    
    
     $scope.loginIn = function(){
        var user = {
            login: $scope.login,
            password: $scope.password
        };
         $scope.login='';
         $scope.password='';
        UserService.login(user, function(data){
           
        });
     }
     $scope.logOut=function(){
                UserService.logOut()
            }
   
}]);