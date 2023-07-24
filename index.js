var random1= Math.round(Math.random() * 5)+1;
var source= "images/dice"+random1+".png";
document.querySelector(".img1").setAttribute("src", source);


var random2= Math.round(Math.random() * 5)+1;
var source= "images/dice"+random2+".png";
document.querySelector(".img2").setAttribute("src", source);


if(random1>random2){
    document.querySelector("h1").innerHTML= "player1 wins";
}else if(random1<random2){
    document.querySelector("h1").innerHTML= "player2 wins";
}else{
    document.querySelector("h1").innerHTML= "tie";
}