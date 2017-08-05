app.directive('myFooter', function(){
    
    return{
        restrict:'A',
//        template: '    <p class="footerText">Інтернет-магазин "Clean Shave"</p>  ',
        templateUrl:'templates/footer.html',
        link:function(scope,element,attrs){
            
        }
    }
    
})