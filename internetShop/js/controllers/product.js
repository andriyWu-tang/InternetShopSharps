app.controller('productCtrl',['UserService','$location',function(UserService,$location){
        var vm=this;
     vm.chartProducts=[];
    vm.totalPrice={};
	vm.clearChart=function(){
        UserService.clearChart();
        $location.path('/shop');
	}
	    
    vm.removeProduct=function(id){
        UserService.removeProduct(id);
    }
    vm.changeCount=function(){
        UserService.calculatePrice();
        UserService.updateChart();
    }
    vm.goToView=function(){
        $location.path('/shop');
        UserService.updateChart();
    }
    vm.goToContact=function(){
        $location.path('/contact');
        UserService.updateChart();
    }
   
    
    vm.init=function(){
        vm.chartProducts=UserService.getChartProducts();
        vm.totalPrice=UserService.getPrice();
    }
    vm.init()
}]);