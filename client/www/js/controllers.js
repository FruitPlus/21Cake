angular.module('starter.controllers', ['starter.services'])

/*首页*/
.controller('homeCtrl',['$scope','$stateParams','Cakes',function($scope,$stateParams,Cakes){

  $scope.cakes = Cakes.all().slice(0,4);
  $scope.banners = Cakes.getBanner()

}])

/*产品详情*/
.controller('productMainCtrl',['$scope','$stateParams','$state','$ionicPopup','Cakes','toShop',function($scope,$stateParams,$state,$ionicPopup,Cakes,toShop){
    $scope.cakes = Cakes.get($stateParams.cakeId);
    console.log($scope.cakes)
    $scope.pounds = [1,2,3,5]
    $scope.Index = 0
    $scope.total = $scope.pounds[0]*198
    $scope.change = function(index){
      $scope.Index = index
      $scope.total = $scope.pounds[index]*198
    }

    $scope.toShop = function(product) {
      $scope.data = {
        id:$stateParams.cakeId,
        name:$scope.cakes.name,
        num:1,
        price:$scope.cakes.price,
        size:$scope.pounds[$scope.Index],
        lastText:$scope.cakes.lastText,
        face:$scope.cakes.face
      }
      toShop.addProduct($scope.data)
      console.log($scope.data)
      $scope.goCart = function(){
         myPopup.close()
        console.log('okkkkk')
        $state.go('tab.shopcart')
      }
      $scope.closePopup=function(){
        myPopup.close()
      }
      var myPopup = $ionicPopup.show({
        template: '<button class="toCart toCart_button" ng-click="goCart()">进入购物车</button><button class="toCart toCart_button toCart_buttonT" ng-click="closePopup()">继续购物</button>',
        title: '<span style="color:red">商品成功加入到购物车</span>',
        subTitle: '',
        scope: $scope, 
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
  }
}])
.controller('CakesCtrl', function($scope, Cakes) {
  $scope.cakes = Cakes.all();
  $scope.remove = function(cake) {
    Cakes.remove(cake);
  };
})


/*蛋糕详情*/
.controller('CakeDetailCtrl',['$scope','$stateParams','$ionicPopup','Cakes',function($scope,$stateParams,$ionicPopup,Cakes){
    $scope.cakes = Cakes.get($stateParams.cakeId);
    $scope.pounds = [1,2,3,5]
    $scope.Index = 0
    $scope.total = $scope.pounds[0]*198
    $scope.change = function(index){
      $scope.Index = index
      $scope.total = $scope.pounds[index]*198
    }
    $scope.toShop = function(product) {
      $scope.data = {
        id:$stateParams.cakeId,
        size:$scope.pounds[$scope.Index],
        total:$scope.total,
        size:1
      }
    $scope.closePopup=function(){
      myPopup.close()
    }
    var myPopup = $ionicPopup.show({
      template: '<button class="toCart toCart_button" ng-click="alert()">进入购物车</button><button class="toCart toCart_button toCart_buttonT" ng-click="closePopup()">继续购物</button>',
      title: '<span style="color:red">商品成功加入到购物车</span>',
      subTitle: '',
      scope: $scope, 
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
  }
}])


/*新品*/
.controller('NewCtrl', function($scope, News) {

  $scope.News = News.all();
  $scope.remove = function(chat) {
    News.remove(chat);
  };
})

/*新品详情*/
.controller('newDetailCtrl',['$scope','$stateParams','$ionicPopup','News',function($scope,$stateParams,$ionicPopup,News){
    $scope.news = News.get($stateParams.newId);
    $scope.pounds = [1,2,3,5]
    $scope.Index = 0
    $scope.total = $scope.pounds[0]*198
    $scope.change = function(index){
      $scope.Index = index
      $scope.total = $scope.pounds[index]*198
    }
    $scope.showPopup = function(product) {
      $scope.data = {
        id:$stateParams.newId,
        size:$scope.pounds[$scope.Index],
        total:$scope.total
      }
    $scope.closePopup=function(){
      myPopup.close()
    }
    var myPopup = $ionicPopup.show({
      template: '<button class="toCart toCart_button" ng-click="alert()">进入购物车</button><button class="toCart toCart_button toCart_buttonT" ng-click="closePopup()">继续购物</button>',
      title: '<span style="color:red">商品成功加入到购物车</span>',
      subTitle: '',
      scope: $scope, 
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
  }
}])

/*登录注册*/
.controller('personCtrl',['$scope','$ionicPopup',function($scope,$ionicPopup){
  $scope.select = true;
  $scope.userReg = {};
  $scope.userReg.psw = "gd88822989";
  $scope.userReg.psw2 = "gd88822989";
  $scope.userReg.code = "123456";
  $scope.userReg.name = "18814188379";
  $scope.userReg.agree = false;
  
  $scope.changeTab = function(flag){
      $scope.select = flag
  }


  /*注册*/
  $scope.processForm = function(user){
    console.log(user)
    var re = /^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/;
    if(!re.test(user.name)){
      title = '请输入正确的手机号码';
      $scope.showPopup(title);
      return
    }
    if(user.psw !== user.psw2){
      title = '两次密码不相同';
      $scope.showPopup(title);
      return
    }
    if(user.code !== '123456'){
      title = '验证码错误';
      $scope.showPopup(title);
      return
    }
    if(user.agree !== true){
      title = '同意协议才能注册';
      $scope.showPopup(title);
    }
  }




  $scope.userLogin = {};
  $scope.userLogin.psw = "gd88822989";
  $scope.userLogin.name = "18814188379";

  /*登录*/
  $scope.signIn = function(userLogin){
      console.log(userLogin)
      localStorage.setItem('cakeUserName',userLogin.name)
  }

  $scope.showPopup = function(title) {
    $scope.closePopup=function(){
      myPopup.close()
    }
    var myPopup = $ionicPopup.show({
      template: '<button class="toCart toCart_button toCart_buttonT" ng-click="closePopup()">返回</button>',
      title: title,
      subTitle: '',
      scope: $scope, 
    });
  }

}])


