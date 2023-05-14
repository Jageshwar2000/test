var arr =[1,2];
var newarr =[];

for(var i=0;i<arr.length;i++)
{
    double(arr[i]);
    
}

function double(num){
    newarr.push(num*2);
}

console.log(newarr);