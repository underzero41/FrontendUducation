function Point(x,y){
    this.x = x;
    this.y = y;
}

var p = Point(1, 1);
Point.prototype.r = new function(){
    return Math.sqrt(
        this.x * this,x + 
        this.y * this.y)
}
p.r()