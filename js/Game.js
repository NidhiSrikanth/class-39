class Game {
    constructor(){

    }

    getState(){
        var getStateRef= database.ref("gameState");
        getStateRef.on("value",function(data){
            gameState= data.val ();
            
        })
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

     async start(){
        if(gameState===0){
           
            player= new Player();
            var playerCountRef= await database.ref("playerCount").once("value");
           
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val();
                player.getCount();
            }
            form=new Form ();
            form.display();
        }
car1=createSprite(100,200) 
car1.addImage ("car1", car1Img);
car2= createSprite(300,200)
car2.addImage ("car2", car2Img);
car3= createSprite(500,200)
car3.addImage ("car3", car3Img);
car4= createSprite(700,200)
car4.addImage ("car4", car4Img);
cars= [car1,car2,car3,car4];

    }

    play(){
        form.hide();
        
        Player. getPlayerInfo();
         if (allPlayers!== undefined){

            background("black");
            image(track, 0,-displayHeight*4,displayWidth,displayHeight*5);
//index of the array 
var index= 0;

//x and y position of the cars 
var x=210;
var y;
for (var plr in allPlayers){
    // add 1 to the index for every loop 
    index= index+1;

    //position the cars away from each other in x axis
    x= x+220;

    //use data from database to display the cars in y direction
    y= displayHeight- allPlayers[plr].distance;

    cars[index-1].x=x;
    cars[index-1].y= y;

    if(index===player.index){
        stroke(10);
        fill("blue");
        ellipse(x,y,60,60);

cars[index-1].shapeColor= "red";
camera.position.x= displayWidth/2;
camera.position.y= cars[index-1].y;
    }
}
         }
         if(keyIsDown (UP_ARROW)&& player.index!== null){
             player.distance= player.distance+10;
             player.updateName();
             console.log(player.distance);
         }

         if (player.distance>4200){
             gameState=2;
             
         }


drawSprites();


        }

        

        
    }
