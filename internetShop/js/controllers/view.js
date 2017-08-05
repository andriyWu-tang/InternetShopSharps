app.controller('viewCtrl',['UserService','$location',function(UserService,$location){
        var vm=this;
     
    vm.currentProduct={};
    
    vm.addToChart = function(id){
        UserService.addToChart(id);
        $location.path('/product')
    }
    
    vm.init=function(){
        vm.currentProduct=UserService.getCurProd();
    }
    vm.init()
}]);