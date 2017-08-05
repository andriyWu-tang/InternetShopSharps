app.controller('contactCtrl',['UserService',function(UserService){
        var vm=this;
      vm.chartProducts=[];
    vm.totalPrice={};
    
    vm.send=function(){
        vm.buyer={
            email:vm.email,
            name:vm.name,
            sname:vm.sname,
            phone:vm.phone,
            message:vm.message,
            chartProducts:vm.chartProducts,
            totalPrice:vm.totalPrice
        }
        UserService.send(vm.buyer);
            vm.email='';
           vm.name='';
            vm.sname='';
            vm.phone='';
            vm.message='';
    }
    
    vm.init=function(){
         vm.chartProducts=UserService.getChartProducts();
        vm.totalPrice=UserService.getPrice();
    }
    vm.init()
}]);