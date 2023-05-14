var arr = [1,2,3,4,5,6];

function cube(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%3==0)
        {
           sum +=arr[i]*arr[i]*arr[i];
        }
    }
    return sum;
}

var ans = cube(arr);
console.log(ans);