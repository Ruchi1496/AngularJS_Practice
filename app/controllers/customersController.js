(function(){
  var customersController=function($scope,customersFactory) {
    $scope.sortBy='name';
    $scope.reverse=false; //ascending
    $scope.customers=[];

    function init(){
      customersFactory.getCustomers()     //chain to a promise
            .success(function(customers){
              $scope.customers=customers;
            })
            .error(function(data,status,header,config){
                //handle error
            });
    }

      init();

      $scope.doSort = function(PropName){
      $scope.sortBy=PropName;
      $scope.reverse=!$scope.reverse;
    };

      $scope.deleteCustomer=function(customerId){
        customersFactory.deleteCustomer(customerId)
          .success(function(status){
              if(status){
                for(var i=0,len=$scope.customers.length;i<len;i++){
                    if($scope.customers[i].id===customerId){
                      $scope.customers.splice(i,1);
                      break;
                    }
                }
              }
              else{
                $window.alert('Unable to delete customer');
              }
          })
          .error(function(data,status,headers,config){
            //handle error
          })
      };
  };

  customersController.$inject=['$scope','customersFactory'];
  angular.module('customersApp').controller('customersController',customersController );
})();
