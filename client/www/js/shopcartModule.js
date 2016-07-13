angular.module('shopcartControllers', ['starter.services'])
/*购物车*/
.controller('shopcartCtrl',['$scope','$state','$ionicPopup','toShop',function($scope,$state,$ionicPopup,toShop){

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.data = toShop.getProductList()
  });

  $scope.remove = function(prdouct,index) {
    console.log('del')
    console.log(prdouct)
    console.log(index)
    toShop.delProduct(prdouct)
    $scope.data.splice(index, 1)
  };
  $scope.add = function(i){
   $scope.data[i].num ++
  };
  $scope.del = function(i){
   $scope.data[i].num --
  };

  $scope.$watch('data', function(newValue, oldValue) {
    angular.forEach(newValue, function(value, key) {
      // shoppingCart.updateproductnum(value.id, value.num)
      if (newValue[key].num === undefined) {
        newValue[key].num = 9999
      }
      if (newValue[key].num === null) {
        newValue[key].num = 1
      }
      if (newValue[key].num >= 999) {
        newValue[key].num = 999
      }
      if (newValue[key].num <=0) {
        newValue[key].num = 1
      }
    });
  }, true);

  $scope.total = function(){
    var total = 0;  

    // console.log($scope.data)
    
    angular.forEach($scope.data,function(value){
        // console.log(value)
        total += value.num*value.price
    })
    return total
  }

  $scope.changNum = function(i,num) {
    $scope.num = num;
    console.log(num)
    $scope.sureNum = function(num){
      $scope.data[i].num = num
      myPopup.close()
    }
    $scope.closePopup=function(){
      myPopup.close()
    }
    var myPopup = $ionicPopup.show({
      template: '<input type="text" class="toCart toCart_button" ng-model="num"style="background:#fff">'+
                '<button class="toCart toCart_button" ng-click="sureNum(num)">确定</button>'+
                '<button class="toCart toCart_button toCart_buttonT" ng-click="closePopup()">取消</button>',
      title: '<span style="color:red">请输入修改的数量</span>',
      subTitle: '',
      scope: $scope, 
    });
  };

  $scope.delProduct = function(prdouct,index) {
    console.log(prdouct)
    var confirmPopup = $ionicPopup.confirm({
      title: '是否删除该商品',
      template: '',
      buttons: [
        {
          text: '<b>取消</b>',
          type: 'toCart_button button cancle',
          onTap: function(e) {
              return false
          }
        },
        {
          text: '<b>确定</b>',
          type: 'toCart_button button',
          onTap: function(e) {
              return true
          }
        },
      ]
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('确定删除');
        $scope.remove(prdouct)
      } else {
        console.log('取消删除');
      }
    });
  };

  //删除所有商品
  $scope.delConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: '是否删除所有商品',
      template: '',
      buttons: [
        {
          text: '<b>取消</b>',
          type: 'toCart_button button cancle',
          onTap: function(e) {
              return false
          }
        },
        {
          text: '<b>确定</b>',
          type: 'toCart_button button',
          onTap: function(e) {
              return true
          }
        },
      ]
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('确定删除');
        shopcart.removeAll()
        console.log(shopcart.all())
      } else {
        console.log('取消删除');
      }
    });
  };

  /*提价订单*/
  $scope.toSubmit = function(){
    console.log("toSubmit")
    $state.go('tab.shopcartSubmit')
  }

}])



//订单提交
.controller('shopcartSubmitCtrl',['$scope','$ionicModal','$ionicHistory','ionicDatePicker','shopcartSubmit',function($scope,$ionicModal,$ionicHistory,ionicDatePicker,shopcartSubmit){
  var changeTime = changeTime?changeTime:new Date()
  $scope.currentDate = new Date()
  
  var ipObj1 = {
    callback: function (val) {  //Mandatory
     $scope.currentDate = val
    },
    disabledDates: [            //Optional
      new Date(2016, 2, 16),
      new Date(2015, 3, 16),
      new Date(2015, 4, 16),
      new Date(2015, 5, 16),
      new Date('Wednesday, August 12, 2015'),
      new Date("08-16-2016"),
      new Date(1439676000000)
    ],
    from: new Date(2012, 1, 1), //Optional
    to: new Date(2016, 10, 30), //Optional
    inputDate: changeTime,      //Optional
    mondayFirst: true,          //Optional
    disableWeekdays: [0],       //Optional
    closeOnSelect: false,       //Optional
    templateType: 'popup'       //Optional
  };

  $scope.openDatePicker = function(time){
    ionicDatePicker.openDatePicker(ipObj1);
  };
  $scope.$on('$ionicView.beforeEnter', function() {
    console.log('$ionicView.beforeEnter')
    /*获取所有地址*/
    $scope.address = shopcartSubmit.getAddress()

    angular.forEach($scope.address,function(value,i){
      if(value.select==true)
      $scope.shopcartReceipt = value
    })

    /*获取所有付款方式*/
    $scope.payWay = shopcartSubmit.getPayWay()
    $scope.payWayChoice = shopcartSubmit.selectPayWay()
  });


  /*选择地址*/
  $scope.selectAddress = function(index,select){
    shopcartSubmit.setSelect(index)
    $ionicHistory.goBack()
  } 

  /*选择支付方式*/

  $scope.selectPayWay = function(index){   
      $scope.payWayChoice =  shopcartSubmit.selectPayWay(index)
      $ionicHistory.goBack()
  }

}])

