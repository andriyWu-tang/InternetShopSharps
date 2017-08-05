var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(request, response){
    response.send('Hello i am api');
});

var buyers = [];
var sugges=[];
var users=[{
        id: 354,
        name: 'Andriy',
        sname: 'Krutyi',
        login: '1',
        password: '1'
    }];
var products = [
    {
        id:1,
        name:'Бритва',
        price:10,
        about:'опис товару',
        idCateg:11,
        photo:'http://shaveart.ru/image/catalog/catalog/rm73_400_auto_jpg.jpg',
        countProd:1
    },
    {
        id:2,
        name:'Бритва',
        price:15,
        about:'опис товару',
        idCateg:11,
        photo:'https://www.greys.com.ua/wa-data/public/shop/products/95/22/2295/images/2854/2854.230.jpg',
        countProd:1
    },
    {
        id:3,
        name:'Бритва',
        price:13,
        about:'опис товару',
        idCateg:22,
        photo:'http://rusknife.com/uploads/post-709-0-22282300-1397557700.jpg',
        countProd:1
    },
    {
        id:4,
        name:'Бритва',
        price:17,
        about:'опис товару',
        idCateg:33,
        photo:'http://f1.ds-russia.ru/u_dirs/076/76287/b5cda410dfea76909eec600c2a915cac.jpg',
        countProd:1
    },
    {
        id:5,
        name:'Бритва',
        price:24,
        about:'опис товару',
        idCateg:22,
       photo:'http://embargo.ua/published/publicdata/EMB33/attachments/SC/products_pictures/opasnaya_britva%2009.jpg',
        countProd:1
    },
    {
        id:6,
        name:'Бритва',
        price:10,
        about:'опис товару',
        idCateg:11,
        photo:'http://shaveart.ru/image/catalog/catalog/rm73_400_auto_jpg.jpg',
        countProd:1
    },
    {
        id:7,
        name:'Бритва',
        price:15,
        about:'опис товару',
        idCateg:11,
        photo:'https://www.greys.com.ua/wa-data/public/shop/products/95/22/2295/images/2854/2854.230.jpg',
        countProd:1
    },
    {
        id:8,
        name:'Бритва',
        price:13,
        about:'опис товару',
        idCateg:22,
        photo:'http://rusknife.com/uploads/post-709-0-22282300-1397557700.jpg',
        countProd:1
    },
    {
        id:9,
        name:'Бритва',
        price:17,
        about:'опис товару',
        idCateg:33,
        photo:'http://f1.ds-russia.ru/u_dirs/076/76287/b5cda410dfea76909eec600c2a915cac.jpg',
        countProd:1
    },
    {
        id:10,
        name:'Бритва',
        price:24,
        about:'опис товару',
        idCateg:22,
       photo:'http://embargo.ua/published/publicdata/EMB33/attachments/SC/products_pictures/opasnaya_britva%2009.jpg',
        countProd:1
    },
    {
        id:11,
        name:'повний набір',
        price:85,
        about:'опис товару',
        idCateg:44,
        photo:'http://novij-rik.pp.ua/foto/20/image_100.jpg',
        countProd:1
    },
     {
        id:12,
        name:'повний набір',
        price:94,
        about:'опис товару',
        idCateg:44,
        photo:'http://ctranapodarkov.ru/d/183629/d/128228bigfile.jpg',
        countProd:1
    },
    {
        id:13,
        name:'повний набір',
        price:90,
        about:'опис товару',
        idCateg:44,
        photo:'http://www.salonprezent.ru/Pictures/09300/9315.jpg',
        countProd:1
    },
    {
        id:14,
        name:'повний набір',
        price:87,
        about:'опис товару',
        idCateg:44,
        photo:'http://www.ua.all.biz/img/ua/catalog/middle/1550843.JPG',
        countProd:1
    },
    {
        id:15,
        name:'акція',
        price:15,
        about:'опис товару',
        idCateg:55,
        photo:'http://dovo.com.ua/content/images/25/26820-dovo-white-acrylic-pearl-68-64329102593991.jpg',
        countProd:1
    },
    {
        id:16,
        name:'акція',
        price:15,
        about:'опис товару',
        idCateg:55,
        photo:'http://embargo.ua/published/publicdata/EMB33/attachments/SC/products_pictures/4-1%20t-obraz%20britva.jpg',
        countProd:1
    },
    {
        id:17,
        name:'акція',
        price:15,
        about:'опис товару',
        idCateg:55,
        photo:'http://line-prof.ru/images/britvy/kiepe/1.jpg',
        countProd:1
    }
];
var category = [
    {
        id:11,
        name:'Джордж Батлер'
    },
    {
        id:22,
        name:'Джон Барбер'
    },
    {
        id:33,
        name:'Роджерс'
    },
    {
        id:44,
        name:'Повні набори'
    },
    {
        id:55,
        name:'Акція!!!'
    }
];

app.get('/products', function(req, res){
    res.send(products);
});
app.get('/category', function(req, res){
    res.send(category);
});

app.get('/users', function(req, res){
    res.send(users);
});
app.get('/sugges', function(req, res){
    res.send(sugges);
});
app.post('/suggest', function(req, res){
    var sugg = req.body;
    sugges.push(sugg);
    var obj = Object.assign({},sugg);
    res.send(obj);
           
});

app.post('/login', function(req, res){
    var user = req.body;
    for(var i in users){
        if(users[i].login==user.login && users[i].password==user.password){
            var obj = Object.assign({},users[i]);
            delete obj.password;
            res.send(obj);
            return;
        }
    }
    res.send(false);
    return;
    
});

app.post('/registr', function(req, res){
    var user = req.body;
    user.id = Date.now();
    users.push(user);
    var obj = Object.assign({},user);
     delete obj.password;
    res.send(obj);
           
});

app.listen(8080, function(){
    console.log('listen on port')
});