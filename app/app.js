var app= angular.module( 'customersApp', ['ngRoute','ngAnimate']);
  app.config(function($routeProvider){
    $routeProvider
      .when('/',{                   //when you go to root we are going to load customersControllerand customers.html view
        controller: 'customersController',
        templateUrl: 'app/views/customers.html'
      })
      .when('/orders/:customerId',{
        controller: 'ordersController',
        templateUrl: 'app/views/orders.html'
      })
      .when('/orders',{
        controller:'AllOrdersController',
        templateUrl:'app/views/allorders.html'
      })
      .otherwise( {redirectTo:'/'} );
});
