app.factory('UserService',['$http', function($http){

    return{
        
        getProducts:function(callback){
             return $http.get('http://localhost:8080/products').then(function(data){
                products = data.data;
                 callback(products);
                 })
        },
        getCurProd:function(){
            return currentProduct;
        },
        showCurProd:function(id){
            for(var i in products){
                if (products[i].id === id) {
                    currentProduct=products[i];
                }
            }
        },
        updateChart:function(){
			localStorage.setItem('test',JSON.stringify(chartProducts));	
		},
        getChartProducts:function(){
			chartProducts=JSON.parse(localStorage.getItem('test'));
//            this.updateChart();
            return chartProducts;
        },
        addToChart:function(id){
                 if(chartProducts==null){
                chartProducts=[];
            }     
            for(var j in chartProducts){
                if(chartProducts[j].id==id){
                    chartProducts[j].count++;
                    this.calculatePrice();
                    this.updateChart();
                    return;
                }
            }
            for(var i in products){
                if(products[i].id === id){
                    chartProducts.push(products[i]);
                }
            }
           this.calculatePrice();
			this.updateChart();
                       
        },
        removeProduct:function(id){
            for(var i in chartProducts){
                if(chartProducts[i].id === id){
                    chartProducts.splice(i,1);
                }
            }
            this.calculatePrice();
			this.updateChart();
            
        },
        getCategories:function(callback){
            return $http.get('http://localhost:8080/category').then(function(data){
                category = data.data;
                 callback(category);
                 })
        },
        getPrice:function(){
            this.calculatePrice();
            return totalPrice;
        },
        calculatePrice:function(){
            var price=0;
            for(var i in chartProducts){
                if(chartProducts[i].countProd<0){
                    chartProducts[i].countProd=0;
                }
               price+=chartProducts[i].price*chartProducts[i].countProd;
            }
            totalPrice.price=price;
        },
        send:function(obj){
           buyers.push(obj);
            console.log(buyers);
        },
		clearChart:function(){
			localStorage.clear();
			totalPrice.price=0;
		},
        
        addSugges:function(sugg){
           var obj = JSON.stringify(sugg);
           return $http.post('http://localhost:8080/suggest',obj)
           .then(function(data){
               lastSugg = data.data;
//               console.log(lastSugg);
           })
           .catch(function(err){
               console.log(err);
           })
           sugges.push(lastSugg);
//            console.log(sugges);
       },
        getSugges: function(callback){
            return $http.get('http://localhost:8080/sugges').then(function(data){
                sugges = data.data;
                callback(sugges);

            })
        },
         getUsers: function(callback){
            return $http.get('http://localhost:8080/users').then(function(data){
                users = data.data;
                callback(users);
            })
        },
        
        login: function(user, callback){
            var obj = JSON.stringify(user);
            return $http.post('http://localhost:8080/login', obj)
            .then(function(data){
                if(data.data){
                    currentUser = data.data;
//                     console.log(currentUser);
                    callback(currentUser);
                }
                callback(false);
            })
            .catch(function(err){
                if(err)console.log(err);
            })
        },
        getCurUser:function(){
            return currentUser;
        },
         logOut:function(){
            currentUser=null;
        },
       registration:function(user){
           var obj = JSON.stringify(user);
           return $http.post('http://localhost:8080/registr',obj)
           .then(function(data){
               currentUser = data.data;
//               console.log(currentUser);
           })
           .catch(function(err){
               console.log(err);
           })
       }
    }
        
        
    
}]);
var lastSugg={};
var users = [];
var sugges=[];
var currentUser = null;
var buyers = [];
var totalPrice = {
    price: 0
};
var chartProducts = [];
var currentProduct = null;
var products = [
//    {
//        id:1,
//        name:'Shaving Blade1',
//        price:10,
//        about:'some text',
//        idCateg:11,
//        photo:'http://shaveart.ru/image/catalog/catalog/rm73_400_auto_jpg.jpg',
//        count:1
//    },
//    {
//        id:2,
//        name:'Shaving Blade2',
//        price:15,
//        about:'some text',
//        idCateg:11,
//        photo:'https://www.greys.com.ua/wa-data/public/shop/products/95/22/2295/images/2854/2854.230.jpg',
//        count:1
//    },
//    {
//        id:3,
//        name:'Shaving Blade3',
//        price:13,
//        about:'some text',
//        idCateg:22,
//        photo:'http://rusknife.com/uploads/post-709-0-22282300-1397557700.jpg',
//        count:1
//    },
//    {
//        id:4,
//        name:'Shaving Blade4',
//        price:17,
//        about:'some text',
//        idCateg:33,
//        photo:'http://f1.ds-russia.ru/u_dirs/076/76287/b5cda410dfea76909eec600c2a915cac.jpg',
//        count:1
//    },
//    {
//        id:5,
//        name:'Shaving Blade5',
//        price:24,
//        about:'some text',
//        idCateg:22,
//       photo:'http://embargo.ua/published/publicdata/EMB33/attachments/SC/products_pictures/opasnaya_britva%2009.jpg',
//        count:1
//    },
//    {
//        id:6,
//        name:'Shaving Blade1',
//        price:10,
//        about:'some text',
//        idCateg:11,
//        photo:'http://shaveart.ru/image/catalog/catalog/rm73_400_auto_jpg.jpg',
//        count:1
//    },
//    {
//        id:7,
//        name:'Shaving Blade2',
//        price:15,
//        about:'some text',
//        idCateg:11,
//        photo:'https://www.greys.com.ua/wa-data/public/shop/products/95/22/2295/images/2854/2854.230.jpg',
//        count:1
//    },
//    {
//        id:8,
//        name:'Shaving Blade3',
//        price:13,
//        about:'some text',
//        idCateg:22,
//        photo:'http://rusknife.com/uploads/post-709-0-22282300-1397557700.jpg',
//        count:1
//    },
//    {
//        id:9,
//        name:'Shaving Blade4',
//        price:17,
//        about:'some text',
//        idCateg:33,
//        photo:'http://f1.ds-russia.ru/u_dirs/076/76287/b5cda410dfea76909eec600c2a915cac.jpg',
//        count:1
//    },
//    {
//        id:10,
//        name:'Shaving Blade5',
//        price:24,
//        about:'some text',
//        idCateg:22,
//       photo:'http://embargo.ua/published/publicdata/EMB33/attachments/SC/products_pictures/opasnaya_britva%2009.jpg',
//        count:1
//    }
];
var category = [
//    {
//        id:11,
//        name:'category1'
//    },
//    {
//        id:22,
//        name:'category2'
//    },
//    {
//        id:33,
//        name:'category3'
//    }
];