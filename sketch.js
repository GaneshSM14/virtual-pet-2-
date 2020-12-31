//Create variables here
var dog;
var database;
function preload()
{
  dog1=loadImage("images/dogImg.png");
  dog2=loadImage("images/dogImg1.png");
  milk=loadImage("images/Milk.png");
}

function setup() {
  createCanvas(1000, 800);
  database=firebase.database();
  dog=createSprite(250,250,50,50);
  dog.addImage(dog1);
  dog.scale=0.5;
  foodstock=database.ref('Food');
  foodstock.on("value",readstock);
  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feeddog);
  addfood=createButton("Add Food");
  addfood.position(800,95);
  addfood.mousePressed(addfoods);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writestock(foodS);
  dog.addImage(dog2);
}
textSize(15);
fill("blue");
//text("Note:Press UP_ARROW KEY",20,25);
if(lastfeed>=12){
  text("lastfeed :"+ lastfeed%12 + "PM", 350,30);
}else if(lastfeed==0){
  text("lastfeed : 12 AM",350,30);
}else{
  text("lastfeed :"+ lastfeed + "AM", 350,30);
}
  drawSprites();
  //add styles here

}
function readstock(data){
  foodS=data.val();
}

function writestock(x){
  database.ref('/').update({Food:x})
}

function feedDog(){
  dog.addImage(dog2);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food : foodObj.getFoodStock(),
    FeedTime:hour()
  })
 
}
function addfoods(){
  foodS++;
  database.ref('/').update({Food:foods})
}
