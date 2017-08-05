app.directive('myHeader',['UserService',function(UserService){
    
    return{
        restrict:'A',
		template: '<img src="/images/logo2.jpg" alt=""> <ul class="menuHeader">            <li><a href="#/home">Головна</a></li>            <li><a href="#/contactUs">Контакти</a></li>            <li><a href="#/shop">Магазин</a></li><li><a href="#/sugges">Відгуки</a></li> </ul>                                                                                                                                                           <div ng-controller="MyCtrl" class="modalDiv">                     <input type="text" class="headerInput" ng-model="login"  placeholder="логін"/>		          <input type="password" class="headerInput" ng-model="password" placeholder="пароль"/>     		                                                              <button ng-click="loginIn()" class="btn btn-info login">увійти</button>                               <button ng-click="toggleModal()" class="btn btn-info enter">реєстрація</button>    <modal-dialog show="modalShown" width="400px" height="50%">                                                        </modal-dialog>  <button class="btn btn-primary ng-click="logOut()">вийти</button></div>                                                                                             <a class="chart" href="#/product" style="padding-top:0%;"><i class="fa fa-shopping-cart" aria-hidden="true"></i>  {{count}}</a>                                                                                                                                                                                                                                                                                                      ',
		scope: {
			count: '='	
		},
        link:function(scope,element,attrs){
        }
    }
}]);