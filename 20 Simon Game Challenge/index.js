var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userPattern = []
var started = false
var level = 0

$(".btn").prop('disabled', true);

$(document).keydown(function() {
    if(!started) {
        createNewSequenceIter();
        started = true
    }

    

})


$(".btn").click(function(e) {
    console.log(!$('.btn').prop('disabled'))

    // Check if the button is disabled
    if (!$('.btn').prop('disabled')) {
        handleButtonClick(e)
    } 
    
})

function createNewSequenceIter() {
    $("h1").text("Level " + level)
    var randomNumber1 = Math.floor(Math.random() * 2 + 1);
    var chosenColor = buttonColors[randomNumber1];
    gamePattern.push(chosenColor);

    playSound(chosenColor);
    $("#" + chosenColor).fadeOut(100).fadeIn(100);

    $(".btn").prop('disabled', false);
}

function playSound(chosenColor) {
    var audio = new Audio("./sounds/" + chosenColor + ".mp3");
    audio.play();
}

function handleButtonClick(e) {
    $(".btn").prop('disabled', true);
    playSound(e.target.id)

    fadeAction(e)

    userPattern.push(e.target.id)
    if (e.target.id !== gamePattern[userPattern.length - 1])
    {
        $("body").addClass("game-over")
        playSound("wrong")
        setTimeout(function () {
            reset()
        }, 1000)
        return
    }


    if(userPattern.length === gamePattern.length) {
        level++
        setTimeout(function() {
            userPattern = []
            createNewSequenceIter()
        }, 1000)
    }

    else 
        $(".btn").prop('disabled', false);

}

function fadeAction(e) {
    $("#" + e.target.id).addClass("pressed")
    setTimeout(function () {
        $("#" + e.target.id).removeClass("pressed")
    }, 30)
}

function reset() {
    gamePattern = []
    userPattern = []
    level = 0
    $("body").removeClass("game-over")
    $("h1").text("Press A Key to Start")
    started = false
}