var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImagesource = "images/" + randomDiceImage;
var randomImagesource2 = "images/" + randomDiceImage2;

var image1 = document.getElementByClassName("img1");
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src" , randomImagesource);
image2.setAttribute("src" , randomImagesource2);

if (randomNumber1 > randomNumber2){
    document.getElementById("text1").innerHTML = "Player 1 Wins!!";
}
else if(randomNumber2 > randomNumber1){
    document.getElementById("text1").innerHTML = "Player 2 Wins!!";
}
else{
    document.getElementById("text1").innerHTML = "Draw!";
}
