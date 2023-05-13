const Rectangle ={
    length :0,
    width :0,

    area : function(){
        return this.length *this.width;
    },

    perimeter(){
    return 2*(this.length +this.width);
    }
}

const myRectangle = Object.create(Rectangle);
myRectangle.length = 5;
myRectangle.width =10;

console.log(myRectangle.area());
console.log(myRectangle.perimeter());