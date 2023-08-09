document.querySelectorAll("button").forEach( item => {
    item.addEventListener("click",handleClick)
})

document.addEventListener("keydown",handleClick)




function handleClick(e) {
    var test = this.innerHTML
    if (e.key)
        test = e.key

    var audioStr = ""
    switch(test) {
        case "w":
            audioStr= "crash"
            break
        case "a":
            audioStr= "kick-bass"
            break    
        case "s":
            audioStr= "snare"
            break       
        case "d":
            audioStr= "tom-1"
            break       
        case "j":
            audioStr= "tom-2"
            break       
        case "k":
            audioStr= "tom-3" 
            break      
        case "l":
            audioStr= "tom-4"
            break    
        default:
            return      
    }
    console.log(audioStr)

    var audio = new Audio("./sounds/"+ audioStr +".mp3")
    audio.play()


    document.querySelector("." + test).classList.add("pressed")

    setTimeout(function() {
        document.querySelector("." + test).classList.remove("pressed")
    }, 100)
}