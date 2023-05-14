var arr = [1,2,3];
var odd =[];

for(var i=0;i<arr.length;i++)
{
    extract(arr[i]);
}

function extract(num){
    if(num%2 !=0)
    {
        odd.push(num);
    }
        
}
console.log(odd);