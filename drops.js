class drops{
    constructor(x, y,r) {
        var options = {
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r=r;
        World.add(world, this.body);
      }
 
      
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0, 0,this.r);
        pop();
      
      var maxDrops=100;
      for( var i=0; i<maxDrops;i++){
          drops.push(new createDrop( random( 0,400), random( 0,400)));
      }}
}