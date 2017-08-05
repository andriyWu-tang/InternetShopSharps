app.controller('firstCtrl',['UserService','$location',function(UserService,$location){
        var vm=this;
     vm.goToShop=function(){
         $location.path('/shop');
     }
     vm.showProd=function(id){
        UserService.showCurProd(id);
        $location.path('/view');
    }
     vm.addToChart = function(id){
        UserService.addToChart(id);
        $location.path('/product')
    }
        vm.category=[];
    vm.products=[];
     vm.value=44;
     vm.value2=55;
        vm.left=0;
        vm.timer;
        
         vm.autoSlider=function(){
            vm.timer=setTimeout(function(){
                vm.polosa=angular.element(document.getElementById('polosa'));
            vm.left=vm.left-1000;
            if(vm.left<-2000){
                vm.left=0;
                clearTimeout(vm.timer);
            }
            vm.polosa.css('left',vm.left + "px");
            vm.autoSlider(); 
            },3000);
        }
    vm.init=function(){
        vm.autoSlider();
        vm.products=UserService.getProducts(function(data){
            vm.products = data;
        });
         vm.category=UserService.getCategories(function(data){
            vm.category = data;
        });
    }
    vm.init()
    
}]);