(function(){
  var ordersController=function($scope,$routeParams,customersFactory) {
    var customerId=$routeParams.customerId; // to get to the route and grab its parameter customerId
    $scope.orders=null;
    $scope.customer=null;
    function init(){
      customersFactory.getCustomer(customerId)     //chain to a promise
            .success(function(customer){
              $scope.customer=customer;
            })
            .error(function(data,status,header,config){
                //handle error
            });
      }
        init();
  };
  ordersController.$inject=['$scope','$routeParams','customersFactory']; //script minification
  angular.module('customersApp').controller('ordersController',ordersController );
})();
