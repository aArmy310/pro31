class Plinko {
    constructor(x,y){
        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x,y, this.r , options);
        
    }
    
display(){
    for (var j = 40; j <= width; j =j+50)
    {
        plinko.push(new Plinko(j,75));
    }
    for (var j = 15; j <= width-10; j =j+50)
    {
        plinko.push(new Plinko(j,175));
    }
}
}