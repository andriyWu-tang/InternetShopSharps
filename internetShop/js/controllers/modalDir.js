app.directive('modalDialog', ['UserService',function(UserService){
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
         scope.register=function(){
      var obj = {
          name:scope.name,
          sname:scope.sname,
          login:scope.login,
          password:scope.password
      }
//      console.log(obj);
              UserService.registration(obj);
             scope.hideModal();
      }
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div>                                                                                               <input type='text' class='form-control' ng-model='login'  placeholder='логін'/>		                                 <input type='password' class='form-control' ng-model='password' placeholder='пароль'/>                                  <input type='text' class='form-control' ng-model='name'  placeholder='імя'/>                                           <input type='text' class='form-control' ng-model='sname' placeholder='прізвище'/>                                                                                   <button type='button' class='btn btn-info form-control' ng-click='register()'>зареєструватися</button>                                                         <div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
}]);
