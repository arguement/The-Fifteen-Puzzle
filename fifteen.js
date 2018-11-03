// Extra Feature: End-of-game notification

$(document).ready(function(){
    const shuffleButton = document.getElementById("shufflebutton");
    let blankArea = "square_4_4";
    let blankArea2 = "square_4_4 / square_4_4 / square_4_4 / square_4_4";
    let puzzlearea = $("#puzzlearea"); 
   // let pieces = $("#puzzlearea div");
    let pieces = document.querySelectorAll("#puzzlearea div");
    puzzlearea.addClass("puzzlepiece");
   
   puzzlearea.css({"display":"grid",
   "grid-template-areas":'"square_1_1 square_1_2 square_1_3 square_1_4" "square_2_1 square_2_2 square_2_3 square_2_4" "square_3_1 square_3_2 square_3_3 square_3_4" "square_4_1 square_4_2 square_4_3 square_4_4"'});

   puzzlearea.css({"background-image":"url('')"});
  /* puzzlearea.css({"display":"grid",
   "grid-template-columns":'1fr 1fr 1fr 1fr',"grid-template-rows":'1fr 1fr 1fr 1fr'});*/
 /*  for (let i = 0; i < 16; i++) {
       pieces[i].style.gridArea = ""+i+1;
       
   }*/
   pieces[0].style.gridArea = "square_1_1";
   pieces[1].style.gridArea = "square_1_2";
   pieces[2].style.gridArea = "square_1_3";
   pieces[3].style.gridArea = "square_1_4";
   pieces[4].style.gridArea = "square_2_1";
   pieces[5].style.gridArea = "square_2_2";
   pieces[6].style.gridArea = "square_2_3";
   pieces[7].style.gridArea = "square_2_4";
   pieces[8].style.gridArea = "square_3_1";
   pieces[9].style.gridArea = "square_3_2";
   pieces[10].style.gridArea = "square_3_3";
   pieces[11].style.gridArea = "square_3_4";
   pieces[12].style.gridArea = "square_4_1";
   pieces[13].style.gridArea = "square_4_2";
   pieces[14].style.gridArea = "square_4_3";
   
   let winner={};
    pieces.forEach((element,index) => {
        winner[index] = element.style.gridArea;
    });
   

   pieces.forEach((element) => {
       element.style.border = "2px solid black";
   });
   //pieces[13].style.backgroundPosition ="-200px 0px";
  // pieces[13].style.backgroundColor = "white";
  pieces.forEach((element) => {
    element.style.backgroundImage = "url('background.jpg')";
    element.style.backgroundSize = "400px 400px";
});
  pieces[0].style.backgroundPosition = "0px 0px";
  pieces[1].style.backgroundPosition = "-100px 0px";
  pieces[2].style.backgroundPosition = "-200px 0px";
  pieces[3].style.backgroundPosition = "-300px 0px";

  pieces[4].style.backgroundPosition = "0px -100px";
  pieces[5].style.backgroundPosition = "-100px -100px";
  pieces[6].style.backgroundPosition = "-200px -100px";
  pieces[7].style.backgroundPosition = "-300px -100px";

  pieces[8].style.backgroundPosition = "0px -200px";
  pieces[9].style.backgroundPosition = "-100px -200px";
  pieces[10].style.backgroundPosition = "-200px -200px";
  pieces[11].style.backgroundPosition = "-300px -200px";

  pieces[12].style.backgroundPosition = "0px -300px";
  pieces[13].style.backgroundPosition = "-100px -300px";
  pieces[14].style.backgroundPosition = "-200px -300px";
  
 console.log(winner);
 console.log(winners());
 //pieces[14].style.gridArea = "square_4_4";
// pieces[10].style.gridArea = "square_4_3";
 //pieces[9].style.gridArea = "4 / 2 / 5 / 3";
 //pieces[12].style.color = "red";
  
function winners(){
    
    let count = 0;
    for(let i in winner){
        if (pieces[parseInt(i)].style.gridArea === winner[i]){
            count++;
        }
    }
    return count == 15;
}
function flash(){
    
}
function backgroundFlash(){
    if (winners() === true){
        let a = setInterval(function () {
            $("body").css("background-color", function () {
                this.switch = !this.switch
                return this.switch ? "red" : ""
            });
        }, 100);

       setTimeout(function(){
            clearInterval(a);
        },2000);
    }
}

function getRowColumn(location){
   // location = individualPiece.style.gridArea;

    if (location == "square_1_1 / square_1_1 / square_1_1 / square_1_1"){
        return [1,1];
    }
    if (location == "square_1_2 / square_1_2 / square_1_2 / square_1_2"){
        return [1,2];
    }
    if (location == "square_1_3 / square_1_3 / square_1_3 / square_1_3"){
        return [1,3];
    }
    if (location == "square_1_4 / square_1_4 / square_1_4 / square_1_4"){
        return [1,4];
    }
    if (location == "square_2_1 / square_2_1 / square_2_1 / square_2_1"){
        return [2,1];
    }
    if (location == "square_2_2 / square_2_2 / square_2_2 / square_2_2"){
        return [2,2];
    }
    if (location === "square_2_3 / square_2_3 / square_2_3 / square_2_3"){
        return [2,3];
    }
    if (location === "square_2_4 / square_2_4 / square_2_4 / square_2_4"){
        return [2,4];
    }
    if (location === "square_3_1 / square_3_1 / square_3_1 / square_3_1"){
        return [3,1];
    }
    if (location === "square_3_2 / square_3_2 / square_3_2 / square_3_2"){
        return [3,2];
    }
    if (location === "square_3_3 / square_3_3 / square_3_3 / square_3_3"){
        return [3,3];
    }
    if (location == "square_3_4 / square_3_4 / square_3_4 / square_3_4"){
        return [3,4];
    }
    if (location === "square_4_1 / square_4_1 / square_4_1 / square_4_1"){
        return [4,1];
    }
    if (location === "square_4_2 / square_4_2 / square_4_2 / square_4_2"){
        return [4,2];
    }
    if (location === "square_4_3 / square_4_3 / square_4_3 / square_4_3"){
        return [4,3];
    }
    if (location === "square_4_4 / square_4_4 / square_4_4 / square_4_4"){
        return [4,4];
    }
    else{
        return 10;
    }
}

function getArrayRowColumn(location){
    // location = individualPiece.style.gridArea;
        location = location.toString();
     if (location == [1,1].toString()){
         return "square_1_1 / square_1_1 / square_1_1 / square_1_1" ;
     }
     if (location == [1,2].toString()){
         return "square_1_2 / square_1_2 / square_1_2 / square_1_2";
     }
     if (location == [1,3].toString()){
         return "square_1_3 / square_1_3 / square_1_3 / square_1_3";
     }
     if (location == [1,4].toString() ){
         return "square_1_4 / square_1_4 / square_1_4 / square_1_4";
     }
     if (location == [2,1].toString() ){
         return "square_2_1 / square_2_1 / square_2_1 / square_2_1";
     }
     if (location == [2,2].toString() ){
         return "square_2_2 / square_2_2 / square_2_2 / square_2_2";
     }
     if (location === [2,3].toString()){
         return "square_2_3 / square_2_3 / square_2_3 / square_2_3";
     }
     if (location === [2,4].toString() ){
         return "square_2_4 / square_2_4 / square_2_4 / square_2_4";
     }
     if (location === [3,1].toString() ){
         return "square_3_1 / square_3_1 / square_3_1 / square_3_1";
     }
     if (location === [3,2].toString()){
         return "square_3_2 / square_3_2 / square_3_2 / square_3_2" ;
     }
     if (location === [3,3].toString()){
         return "square_3_3 / square_3_3 / square_3_3 / square_3_3";
     }
     if (location == [3,4].toString()){
         return "square_3_4 / square_3_4 / square_3_4 / square_3_4";
     }
     if (location === [4,1].toString()){
         return "square_4_1 / square_4_1 / square_4_1 / square_4_1";
     }
     if (location === [4,2].toString() ){
         return "square_4_2 / square_4_2 / square_4_2 / square_4_2";
     }
     if (location === [4,3].toString()){
         return "square_4_3 / square_4_3 / square_4_3 / square_4_3";
     }
     if (location === [4,4].toString()){
         return "square_4_4 / square_4_4 / square_4_4 / square_4_4";
     }
     else{
         return false;
     }
 }
console.log(getArrayRowColumn([0,0])); 

 function getObject(location){
     for (let index = 0; index < pieces.length; index++) {
         if (location === pieces[index].style.gridArea){
             return pieces[index];
         }
         
     }
 }


function shuffle(){
    //let blank = getRowColumn(blankArea2);
    //let toChange =blank;

    for(let i=0; i<300;i++){
        let blank = getRowColumn(blankArea2);
        console.log("show array "+blank);
        let toChange =blank;
        let toSwitch = Math.floor(Math.random() * 4) + 1;
        
        switch (toSwitch) {
            case 1:
                toChange[0] = toChange[0] -1;
                let change = getArrayRowColumn(toChange);

                if (change != false){

                    change = getObject(change);
                    
                    swap(change);
                    console.log("case 1");
                }

                
                break;
            case 2:
                 toChange[0] = toChange[0] +1;
                 console.log( "case 2 toChange: "+toChange);
                let change2 = getArrayRowColumn(toChange);

                if (change2 != false){

                change2 = getObject(change2);
                swap(change2);
                console.log("case 2");
                }

            
            break;   
            case 3:
                 toChange[1] = toChange[1] +1;
                 console.log( "case 3 toChange: "+toChange);
                let change3 = getArrayRowColumn(toChange);

                if (change3 != false){

                change3 = getObject(change3);
                swap(change3);
                console.log("case 3");
                }

            
            break;  
            case 4:
                 toChange[1] = toChange[1] -1;
                 console.log( "case 3 toChange: "+toChange);
                let change4 = getArrayRowColumn(toChange);

                if (change4 != false){

                change4 = getObject(change4);
                swap(change4);
                console.log("case 4");
                }

            
            break;  
        
            default:
                break;
        }

    }
    //console.log(blank);
}
function swap(individualPiece){
    let a = individualPiece.style.gridArea;
    a = getRowColumn(a);
    let blank = getRowColumn(blankArea2);
    console.log(blank);
   if (a[1] == blank[1] && a[0]+1 == blank[0] || a[1] == blank[1] && a[0]-1 == blank[0] ||  a[1]+1 == blank[1] && a[0] == blank[0] || a[1]-1 == blank[1] && a[0] == blank[0] ){
       //backgroundFlash();
        newBlank = individualPiece.style.gridArea;
        individualPiece.style.gridArea = blankArea;
        blankArea = newBlank; 
        blankArea2 = newBlank;
        backgroundFlash();
    }
    
}
//newly added

//end

pieces.forEach((element) => {
    element.addEventListener("click",function(){
        swap(element);
    });
});
pieces.forEach((element) => {
    element.addEventListener("mouseover",function(){
        

        let a = element.style.gridArea;
    a = getRowColumn(a);
    let blank = getRowColumn(blankArea2);
    
   if (a[1] == blank[1] && a[0]+1 == blank[0] || a[1] == blank[1] && a[0]-1 == blank[0] ||  a[1]+1 == blank[1] && a[0] == blank[0] || a[1]-1 == blank[1] && a[0] == blank[0] ){
    element.classList.add("movablepiece");
    }
    
    });
});
shuffleButton.addEventListener("click",function(){
    shuffle();
});

});

