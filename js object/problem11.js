var arr = ["assignment", "problem", "media", "upload"];

var newarr =[];
for(var i=0;i<arr.length;i++)
{
    var str = arr[i];
    var n = str.length;

    if(str[0]=='a' || str[n-1]=='a')
    {
        newarr.push(str);
    }
}

console.log(newarr);