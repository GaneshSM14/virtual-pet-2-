class Food{
constructor(){
    this.foodstock=0
    this.lastfeed;
    this.image=loadImage("images/Milk.png");
}
getfoodstock(){
    return this.foodstock;
}
updatefoodstock(foodstock){
this.foodstock=foodstock;
}
deductFood(){
    if(this.foodstock>0){
        this.foodstock=this.foodstock-1
    }
}
getfeedtime(lastfeed){
this.lastfeed=lastfeed
}
display(){
    var x=80,y=100;
    imageMode(CENTER);
    image(this.image,720,220,70,70);
    if(this.foodstock!=0){
        for(var i=0;i<this.foodstock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
}
}