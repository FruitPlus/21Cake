angular.module('starter.router', [])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {

         $stateProvider

         // setup an abstract state for the tabs directive
         .state('tab', {
           url: '/tab',
           abstract: true,
           templateUrl: 'templates/tabs.html'
         })

         // Each tab has its own nav history stack:

         /*首页*/
         .state('tab.home', {
           url: '/home',
           views: {
             'tab-home': {
               templateUrl: 'templates/tab-home.html',
               controller: 'homeCtrl'
             }
           }
         })

         /*产品详情*/
         .state('productMain', {
             url: '/productMain/:cakeId',
             templateUrl: 'templates/productMain.html',
             controller:'productMainCtrl'
         })

         /*蛋糕*/
         .state('tab.cakes', {
             url: '/cakes',
             views: {
               'tab-cakes': {
                 templateUrl: 'templates/tab-cakes.html',
                 controller: 'CakesCtrl'
               }
             }
           })

         /*蛋糕详情*/
           .state('tab.cake-detail', {
             url: '/cakes/:cakeId',
             views: {
               'tab-cakes': {
                 templateUrl: 'templates/cake-detail.html',
                 controller: 'CakeDetailCtrl'
               }
             }
           })

           /*新品*/
         .state('tab.new', {
           url: '/new',
           views: {
             'tab-new': {
               templateUrl: 'templates/tab-new.html',
               controller: 'NewCtrl'
             }
           }
         })


         /*新品详情*/
         .state('tab.new-detail', {
           url: '/new/:newId',
           views: {
             'tab-new': {
               templateUrl: 'templates/new-detail.html',
               controller: 'newDetailCtrl'
             }
           }
         })


         /*登录验证*/
         .state("tab.person",{
           url:'/person',
           views: {
             'tab-person': {
               templateUrl: 'templates/person.html',
               controller: 'personCtrl'
             }
           }
         })


         /*购物车*/
         .state("tab.shopcart",{
           url:'/shopcart',
           views: {
             'tab-shopcart': {
               templateUrl: 'templates/shopcart.html',
               controller: 'shopcartCtrl'
             }
           }
         })


         /*个人中心*/
         .state("tab.member",{
           url:'/member',
           views:{
             'tab-member':{
               templateUrl:"templates/member.html",
               controller:'memberCtrl'
             }
           }
         })


         /*我的订单*/
         .state("tab.memberOrders",{
           url:'/memberOrders',
           views:{
             'tab-member':{
               templateUrl:"templates/member-Orders.html",
               controller:'memberOrdersCtrl'
             }
           }
         })


         /*代付订单*/
         .state("tab.memberNoOrders",{
           url:'/memberNoOrders',
           views:{
             'tab-member':{
               templateUrl:"templates/member-NoOrders.html",
               controller:'memberNoOrdersCtrl'
             }
           }
         })


         /*收货地址*/
         .state("tab.memberReceiver",{
           url:'/memberReceiver',
           views:{
             'tab-member':{
               templateUrl:"templates/member-Receiver.html",
               controller:'memberReceiverCtrl'
             }
           }
         })


        /*添加收货地址*/
         .state("tab.memberAddReceiver",{
           url:'/memberAddReceiver/:id',
           views:{
             'tab-member':{
               templateUrl:"templates/member-addReceiver.html",
               controller:'memberAddReceiverCtrl'
             }
           }
         })


         /*我的优惠卷*/
         .state("tab.memberCoupon",{
           url:'/memberCoupon',
           views:{
             'tab-member':{
               templateUrl:"templates/member-Coupon.html",
               controller:'memberCouponCtrl'
             }
           }
         })

         /*绑定优惠卷*/
         .state("tab.memberBindCoupon",{
           url:'/memberBindCoupon',
           views:{
             'tab-member':{
               templateUrl:"templates/member-bindCoupon.html",
               controller:'memberBindCouponCtrl'
             }
           }
         })


         /*账户余额*/
         .state("tab.memberBalance",{
           url:'/memberBalance',
           views:{
             'tab-member':{
               templateUrl:"templates/member-Balance.html",
               controller:'memberBalanceCtrl'
             }
           }
         })


         /*订单提交*/
         .state("tab.shopcartSubmit",{
           url:'/shopcartSubmit',
           views: {
             'tab-shopcart': {
               templateUrl: 'templates/shopcart-Submit.html',
               controller: 'shopcartSubmitCtrl'
             }
           }
         })


         /*选择收货地址*/
         .state("tab.shopcartReceipt",{
           url:'/shopcartReceipt',
           views: {
             'tab-shopcart': {
               templateUrl: 'templates/shopcart-Receipt.html',
               controller: 'shopcartSubmitCtrl'
             }
           }
         })

         /*支付方式*/
         .state("tab.shopcartPayWay",{
           url:'/shopcartPayWay',
           views: {
             'tab-shopcart': {
               templateUrl: 'templates/shopcart-PayWay.html',
               controller: 'shopcartSubmitCtrl'
             }
           }
         })

         /*订单提交-现金账户余额*/
         .state("tab.shopcartBalance",{
           url:'/shopcartBalance',
           views: {
             'tab-shopcart': {
               templateUrl: 'templates/shopcart-Balance.html',
               controller: 'shopcartSubmitCtrl'
             }
           }
         })




         // if none of the above states are matched, use this as the fallback
         $urlRouterProvider.otherwise('/tab/home');
    }])