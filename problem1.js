var name = ["Rice","Dal","Salt"];
var quantity = [2,3,1];
var price = [60,50,20];

var shop ={
   data :[],
}

for(var i=0;i<name.length;i++)
{
    var object ={
         n : name[i],
         q : quantity[i],
         p : price[i]
    }

    shop.data.push(object);
}

  shop.total = function (){
    var totalSum=0;
    for(var i=0;i<this.data.length;i++)
   {
        totalSum += this.data[i].q * this.data[i].p;
   }
   return totalSum;
   
}
console.log(shop.total());