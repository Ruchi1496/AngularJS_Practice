(function(){
  var customersFactory= function($http){
    //define customers
    var factory={} //object literal
    factory.getCustomers=function(){ //add function to it
      return $http.get('/customers');
    };

  factory.getCustomer=function(customerId){
    return $http.get('/customers/'+customerId);
  };

  factory.getOrders=function(){
    return $http.get('/orders');
  };

  factory.deleteCustomer=function(customerId){
        return $http.delete('/customers/'+customerId);
  };

  return factory;
};
  customersFactory.$inject=['$http'];
  //register this factory with angular
  angular.module('customersApp').factory('customersFactory',customersFactory);
})();
