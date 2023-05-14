var arr = [1,2,3,4];

function OddSum(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2 !=0)
        {
           sum +=arr[i];
        }
        
    }
    return sum;
}

var ans = OddSum(arr);
console.log(ans);