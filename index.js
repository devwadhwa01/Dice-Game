function randomDice()
{
  var num=Math.random()*6;
  num=Math.floor(num)+1;
  return num;
}

var no1=randomDice();
var no2=randomDice();

// Dice 1
if(no1===1)
{
  document.querySelector(".firstDice").setAttribute("src","images/dice1.gif");
}
else if(no1===2)
{
  document.querySelector(".firstDice").setAttribute("src","images/dice2.gif");
}
else if(no1===3)
{
  document.querySelector(".firstDice").setAttribute("src","images/dice3.gif");
}
else if(no1===4)
{
  document.querySelector(".firstDice").setAttribute("src","images/dice4.gif");
}
else if(no1===5)
{
  document.querySelector(".firstDice").setAttribute("src","images/dice5.gif");
}
else
{
  document.querySelector(".firstDice").setAttribute("src","images/dice6.gif");
}

// Dice 2
if(no2===1)
{
  document.querySelector(".secondDice").setAttribute("src","images/dice1.gif");
}
else if(no2===2)
{
  document.querySelector(".secondDice").setAttribute("src","images/dice2.gif");
}
else if(no2===3)
{
  document.querySelector(".secondDice").setAttribute("src","images/dice3.gif");
}
else if(no2===4)
{
  document.querySelector(".secondDice").setAttribute("src","images/dice4.gif");
}
else if(no2===5)
{
  document.querySelector(".secondDice").setAttribute("src","images/dice5.gif");
}
else
{
  document.querySelector(".secondDice").setAttribute("src","images/dice6.gif");
}

//Timeout
setTimeout(function(){
// Declaring the winner
if(no1>no2)
{
  document.querySelector("#result").innerHTML="Player 1 wins!";
  document.querySelector("#result").style.visibility="visible";
}
else if(no2>no1)
{
  document.querySelector("#result").innerHTML="Player 2 wins!";
  document.querySelector("#result").style.visibility="visible";
}
else {
  document.querySelector("#result").innerHTML="Draw!";
  document.querySelector("#result").style.visibility="visible";
}
}, 1400);
