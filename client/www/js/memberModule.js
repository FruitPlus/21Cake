angular.module('memberControllers', ['starter.services'])

/*个人中心*/
.controller('memberCtrl',['$scope',function($scope){
  console.log('memberCtrl')
}])


/*待付订单*/
.controller('memberNoOrdersCtrl', ['$scope', function($scope){
  console.log('memberNoOrdersCtrl')
  $scope.data = []

}])

/*全部订单*/
.controller('memberOrdersCtrl', ['$scope', function($scope){
  console.log('memberOrderCtrl')
  $scope.data = []
}])

/*地址管理*/
.controller('memberReceiverCtrl', ['$scope','$state','$ionicPopup','Receiver',function($scope,$state,$ionicPopup,Receiver){
  console.log('memberReceiverCtrl')
  $scope.data = Receiver.all()
  console.log($scope.data)
  $scope.addReveiver = function(){
      $state.go('tab.memberAddReceiver')
  }
  $scope.setDefault = function(index){
    Receiver.setDefault(index)
  }
  $scope.delConfirm = function(index) {
    console.log(index)
    var confirmPopup = $ionicPopup.confirm({
      title: '是否删除该地址',
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
        Receiver.remove(index)
      } else {
        console.log('取消删除');
      }
    });
  };
}])

/*添加收货地址*/
.controller('memberAddReceiverCtrl', ['$scope','$state','$ionicPopup','$stateParams','$http','Receiver',function($scope,$state,$ionicPopup,$stateParams,$http,Receiver){

  $scope.CityPickData2 = {
    areaData: ['请选择城市'],
    title: '请选择城市',
    hardwareBackButtonClose: false
  }

  $scope.Receiver = {
    areaData:$scope.CityPickData2.areaData,
    name : "",
    tel :'',
    address:'',
    select:false
  }
  var id = $stateParams.id||'';
  if(id){
    $scope.Receiver = Receiver.getAddress(id)
    $scope.CityPickData2.areaData = $scope.Receiver.areaData    
  }
  $scope.processForm = function () {
    console.log('change')
    console.log($scope.Receiver)
    $scope.Receiver.areaData = $scope.CityPickData2.areaData

    if($scope.Receiver.areaData.length==1){
      $scope.showPopup('请选择城市')
      return false
    }
    Receiver.pushAddress($scope.Receiver,id)
    $scope.showPopup('保存成功')

  }
  $scope.showPopup = function(title) {
    $scope.closePopup=function(){
      myPopup.close()
      $state.go("tab.memberReceiver")
    }
    var myPopup = $ionicPopup.show({
      template: '<button class="toCart toCart_button toCart_buttonT" ng-click="closePopup()">返回</button>',
      title: title,
      subTitle: '',
      scope: $scope, 
    });
  }
}])

/*我的优惠券*/
.controller('memberCouponCtrl', ['$scope', function($scope){
  console.log('memberCouponCtrl')
  $scope.data =[]
}])

/*绑定优惠卷*/
.controller('memberBindCouponCtrl', ['$scope', function($scope){
  console.log('memberBindCouponCtrl')
  $scope.data =[]
}])

/*账户余额*/
.controller('memberBalanceCtrl', ['$scope', function($scope){
  console.log('memberBalanceCtrl')
}])
