app.controller('homeCtrl',['UserService',function(UserService){
    var vm=this;
	vm.headerProducts=[];
        
    vm.init=function(){
		if(UserService.getChartProducts()){
			vm.headerProducts=UserService.getChartProducts();
		}
	}
	vm.init();
}])