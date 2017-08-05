app.controller('shopCtrl',['UserService','$location',function(UserService,$location){
        var vm=this;
     vm.value='';
    vm.products=[];
    vm.currentProduct={};
    vm.category=[];
    
    vm.showAll=function(){
        vm.value='';
    }
    vm.showProd=function(id){
        UserService.showCurProd(id);
        $location.path('/view');
    }
    vm.init=function(){

        vm.products=UserService.getProducts(function(data){
            vm.products = data;
        });
       
        vm.currentProduct=UserService.getCurProd();
        vm.category=UserService.getCategories(function(data){
            vm.category = data;
        });
    }
    vm.init()
}]);