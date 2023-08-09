var randomNumber1 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").setAttribute("src", "./images/dice"+ randomNumber1 +".png")

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img2").setAttribute("src", "./images/dice"+ randomNumber1 +".png")

var result = "Draw"

if (randomNumber1 > randomNumber2)
    result = "Player1 Wins!"
else if (randomNumber2 < randomNumber1) 
    result = "Player2 Wins!"


document.querySelector("h1").innerHTML = result
