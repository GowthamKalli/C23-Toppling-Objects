class Ground{

    constructor(x,y){

        var options = { 
         
            isStatic : true
        }
    
     this.body = Bodies.rectangle(x,y,400,30,options);
     World.add(world,this.body);
    }
   
    display(){

        //nameSpace

        var pos = this.body.position
     
        fill("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,400,30);
    }

}