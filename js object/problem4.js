var arr = [2,3,4];


function product(arr){
    var prod=1;
    for(var i=0;i<arr.length;i++)
    {
        prod *=arr[i];
    }  
    return prod;
}
var ans = product(arr);
console.log(ans);