class tree{
    constructor(x,y,width,height){
     var options = {
         isStatic:true,
         restitution:0.5,
         friction: 1,
         density:1.2
        }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height =height;
     World.add(world,this.body);
     this.image = loadImage("tree.png");
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}