angular.module('starter.services', [])

.factory('Cakes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cakes = [{
    id: 0,
    price:198,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/home_list01.jpg'
  }, {
    id: 1,
    price:198,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/home_list02.jpg'
  }, {
    id: 2,
    price:198,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/home_list03.jpg'
  }, {
    id: 3,
    price:198,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/home_list04.jpg'
  }, {
    id: 4,
    price:198,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/home_list05.jpg'
  },{
      id: 0,
      price:198,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/home_list01.jpg'
    }, {
      id: 1,
      price:198,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/home_list02.jpg'
    }, {
      id: 2,
      price:198,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/home_list03.jpg'
    }, {
      id: 3,
      price:198,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/home_list04.jpg'
    }, {
      id: 4,
      price:198,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/home_list05.jpg'
    }
  ];

  var banner = [
    {
      img:'img/banner01.jpg'
    },
    {
      img:'img/banner02.jpg'
    },
    {
      img:'img/banner03.jpg'
    },
    {
      img:'img/banner04.jpg'
    },
    {
      img:'img/banner05.jpg'
    }
  ];

  return {
    all: function() {
      return cakes;
    },
    remove: function(chat) {
      cakes.splice(cakes.indexOf(chat), 1);
    },
    get: function(cakeId) {
      for (var i = 0; i < cakes.length; i++) {
        if (cakes[i].id === parseInt(cakeId)) {
          return cakes[i];
        }
      }
      return null;
    },
    getBanner:function(){
      return  banner
    }
  };
})


.factory('News', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var News = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ice_list01.jpg'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/ice_list02.jpg'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/ice_list03.jpg'
  }
  ];



  return {
    all: function() {
      return News;
    },
    remove: function(news) {
      News.splice(News.indexOf(news), 1);
    },
    get: function(newId) {
      for (var i = 0; i < News.length; i++) {
        if (News[i].id === parseInt(newId)) {
          return News[i];
        }
      }
      return null;
    },

  };
})






.factory('Receiver',['$http',function($http){
    var addRess = [
      {
          areaData:["北京","东城区"],
          name : "莫启江",
          tel :'18814188379',
          address:'广州市海珠区南石路12号金威龙',
          select:true,
      },
      {
          areaData:["北京","东城区"],
          name : "莫同学",
          tel :'18814188378',
          address:'广州市海珠区南石路12号金威龙',
          select:false,
      }
    ]
    return {
      all:function(){
        return addRess
      },
      remove:function(index){
        addRess.splice(addRess[index],1)
      },
      setDefault:function(index){
        for(var i = 0;i<addRess.length;i++){
          if(i!=index){
             addRess[i].select = false
          }else{
           addRess[i].select = !addRess[i].select 
          }
        }
      },
      getAddress:function(index){
        return addRess[index]
      },
      pushAddress:function(address,id){
        if(id){
          addRess.splice(id,1,address)
        }else{         
          addRess.push(address)
          if(address.select===true){         
            for(var i = 0;i<addRess.length;i++){
               addRess[i].select = false
            }
            addRess[addRess.length-1].select = true
          }
        }
      }
    }
}])


.factory('shopcartSubmit',['$http',function($http){
  var addRess = [
    {
        areaData:["北京","东城区"],
        name : "同学1111",
        tel :'18814188123',
        address:'广州市海珠区南石路12号金威龙',
        select:true,
    },
    {
        areaData:["北京","东城区"],
        name : "同学222",
        tel :'18814188123',
        address:'广州市海珠区南石路12号金威龙',
        select:false,
    }
  ]

  var payWay = ['支付宝钱包支付','货到付现金','货到POS刷卡']
  var payWayChoice = payWay[0]
  var payWayChoiceIndex = 0
  return {
    getAddress:function(){
      return addRess
    },
    setSelect:function(index){
      angular.forEach(addRess,function(value,i){
          value.select = false
      })
      addRess[index].select = true
    },
    getPayWay:function(index){
      if(index){
         return payWay[index]
      }else{
         return payWay
      }
     
    },
    selectPayWay:function(index){
    payWayChoiceIndex = payWay[index]?index:payWayChoiceIndex

     return payWayChoice =payWay[index]?payWay[index]:payWay[payWayChoiceIndex]
    }

  }
}])


.service('toShop', ['$http', function($http){
  
   var utils = {  
        setParam : function (name,value){  
            localStorage.setItem(name,value)  
        },  
        getParam : function(name){  
            return localStorage.getItem(name)  
        },
        getUsername:function(name){
          return localStorage.getItem(name)
        }
    }; 

    var product = {
      id:"",
      num:'',
      name:'',
      price:'',
      size:'',
      lastText:'',
      img:''
    };

    var cart = {

        /*添加商品*/
       addProduct:function(product){
        /*获得购物车数据*/
        console.log(product)
        var cakeCartStr = utils.getParam("cakeCart");

        var username = utils.getUsername('cakeUserName')
        if(username == '' || username == null){
          return 
        };

        /*第一次加入到购物车*/
        if(cakeCartStr == null||cakeCartStr ==''){
          var cakeCart = []
          var productList = []
          productList.push(product)
          var cakeUser = {
            username:username, //获取用户名
            productList:productList
          }
          cakeCart.push(cakeUser)
          var cakeStr = JSON.stringify(cakeCart)
          utils.setParam('cakeCart',cakeStr)
        }else{
          console.log('不是第一次')
          var userName = utils.getUsername('cakeUserName')
          var found = false
          var cakeCart = JSON.parse(utils.getParam("cakeCart"));
        
          /*在localstorage 中找到username*/
          console.log(cakeCart)
          for(var i = 0;i<cakeCart.length;i++){

              if(cakeCart[i].username == userName){
                console.log('查找到用户名')
                /*如果存在该商品*/
                var hasProduct = false;

                for(var j = 0;j<cakeCart[i].productList.length;j++){
                    console.log(cakeCart[i].productList[j])
                    if(cakeCart[i].productList[j].id == product.id&&cakeCart[i].productList[j].size == product.size){
                      cakeCart[i].productList[j].num += parseInt(product.num)
                      hasProduct = true //确定找到这个商品
                      var cakeStr = JSON.stringify(cakeCart);
                      utils.setParam('cakeCart',cakeStr);
                    }
                }

                 /*如果不存在该商品*/
                if(!hasProduct){
                  console.log('找到用户名但不存在该商品')

                  cakeCart[i].productList.push(product);
                  console.log(cakeCart[i])
                  var cakeStr = JSON.stringify(cakeCart);
                  utils.setParam('cakeCart',cakeStr);
                }
                found =true //确定找这个username
              }
          }

          /*找不到username*/
          if(!found){ 
              console.log('找不到username')
              var cakeUser = {
                username:utils.getUsername('cakeUserName'),
                productList:[product]
              }
              cakeCart.push(cakeUser)
              var cakeStr = Json.stringify(cakeCart);
              utils.setParam('cakeCart',cakeStr);
              var cakeStr = JSON.stringify(cakeCart);
              utils.setParam('cakeCart',cakeStr);
            }

          }
       },


       /*修改商品数量*/
       updateProductNum:function(id,num){
           var cakeCart = JSON.parse(utils.getParam("cakeCart"));
           var userName = utils.getUsername('cakeUserName');
           if(username == '' || username == null){
             return 
           };

           for(var i = 0;i<cakeCart.length;i++){
              if(cakeCart[i].username == userName){
                var list = cakeCart[i].productList
                for(var j=0;j<list.length;j++){
                    if(list[j].id==id){
                      list[j][num] = parseInt(num)
                    }
                }
              }
           }

           var cakeStr = JSON.stringify(cakeCart);
           utils.setParam('cakeCart',cakeStr);
       },

       /*删除商品*/
       delProduct:function(product){
          var cakeCart = JSON.parse(utils.getParam("cakeCart"));
          var userName = utils.getUsername('cakeUserName');
          if(userName == '' || userName == null){
            console.log('删除-没有找到用户')
            return 
          };

          console.log('del1')

          for(var i = 0;i<cakeCart.length;i++){
             if(cakeCart[i].username == userName){
               var list = cakeCart[i].productList
               for(var j=0;j<list.length;j++){
                   if(list[j].id==product.id){
                     console.log(list[j].id)
                     console.log(j)
                     console.log(cakeCart[i].productList)
                     cakeCart[i].productList.splice(j,1)

                     console.log()
                   }
               }
             }
          }
        console.log('del2')
        console.log(cakeCart)
        var cakeStr = JSON.stringify(cakeCart);
        utils.setParam('cakeCart',cakeStr);
       },


       /*获取所有商品*/
       getProductList:function(){
          var cakeCart = JSON.parse(utils.getParam("cakeCart"));
          var userName = utils.getUsername('cakeUserName');

          var productList = []
          console.log(cakeCart)
          if(cakeCart==null){
            cakeCart = []
          }
          for(var i = 0;i<cakeCart.length;i++){
             if(cakeCart[i].username == userName){
                productList = cakeCart[i].productList
             }
          }
          return productList
       }


    };



    return cart
    
}])



/*

  21cakeCart = '[
                {
                  username:'tiancai',
                  productList:[
                    {
                        id:123,  
                        num:12,  
                        name:'蛋糕一号'，
                        price:12
                    }
                  ]
                },
                {
                  username:'shabi',
                  productList:[
                    {
                        id:456,
                        num:12,
                        name:'蛋糕一号'，
                        price:12
                    }
                  ]
                },
              ]'

 */