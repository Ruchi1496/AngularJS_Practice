var express= require('express'),
  app=express();

    app.use(express.static(__dirname+'/'));

app.get('/customers/:id',function(req,res){
    var customerId=parseInt(req.params.id);
    var data={};
    for(var i=0,len=customers.length;i<len;i++){
      if (customers[i].id===customerId) {
        data=customers[i];
        break;
      }
    }
    res.json(data);
});

app.get('/customers',function(req,res){
    res.json(customers);
});

app.get('/orders',function(req,res){
    var orders=[];
    for(var i=0,len=customers.length;i<len;i++){
      if(customers[i].orders){
        for(var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++){
          orders.push(customers[i].orders[j]);
        }
      }
    }
    res.json(orders);
});

app.delete('/customers/:id',function(req,res){
      var customerId=parseInt(req.params.id);
      var data= {status:true};
      for(var i=0,len=customers.length;i<len;i++){
        if(customers[i].id===customerId){
          customers.splice(i,1);
          data={status:true};
          break;
        }
      }
      res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

var customers=[
  {id:1,joined:'2000-12-02', name:'John', city:'NY',orderTotal:9.9956, orders:[{id:1,product:'Shoes',total:9.9956}]},
        {id:2,joined:'1996-10-05', name:'Emily', city:'LA',orderTotal:8.531, orders:[{id:2,product:'Tie',total:4.531},{id:3,product:'TShirt',total:4}]},
        {id:3,joined:'1996-01-15', name:'Rach', city:'YO',orderTotal:7.531, orders:[{id:4,product:'Jacket',total:7.531}]},
        {id:4,joined:'2001-05-24', name:'Joe', city:'NJ',orderTotal:10.531, orders:[{id:5,product:'Pants',total:10.531}]}
];
