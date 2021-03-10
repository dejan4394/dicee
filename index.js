function DiceGame(){

var sliki = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var randomNumber1 = Math.floor((Math.random()*5)+1);
var randomImage1 = sliki[randomNumber1];
document.getElementById("im1").src= randomImage1;

var randomNumber2 = Math.floor((Math.random()*5)+1);
var randomImage2 = sliki[randomNumber2];
document.getElementById("im2").src= randomImage2;



function who_wins()
{
  var player1wins = "Pl.1 Pobeduva";
  var player2wins = "Pl.2 Pobeduva";
  var draw = "Nereseno";

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = player1wins;

}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = player2wins;
  document.getElementById("flag").classList.remove("left")
  document.getElementById("flag").classList.add("right")

}
else{
  document.querySelector("h1").innerHTML = draw;
  document.getElementById("flag").classList.remove("left")
  document.getElementById("flag").classList.add("draw")

}

}
who_wins()
}
DiceGame()
document.getElementById("ref").style.visibility = "hidden";
setTimeout(function(){
document.getElementById("ref").style.visibility = "visible";},2000);
