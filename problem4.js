var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
];

var sum=0;
var min = 999999;
for(var i=0;i<amazon.length;i++)
{
    console.log("product"+" - "+ amazon[i].name +" , "+"Rating"+ " - "+amazon[i].rating);
    sum += amazon[i].rating;

    if(amazon[i].price<min)
    {
        min = amazon[i].price;
    }
}

console.log("Average"+" - "+ sum/amazon.length);
console.log("MinimumPrice"+" - " +min);