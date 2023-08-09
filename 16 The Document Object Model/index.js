document.querySelector("ul").lastElementChild.innerHTML="John Doe"
document.getElementsByTagName("li")[2].innerHTML = "Sike"

document.querySelector(".list  a").style.color = "red"
document.querySelector(".list  a").style.backgroundColor = "cyan"

document.querySelector("button").style.backgroundColor = "yellow"



document.querySelector("button").classList.add("invisible")
document.querySelector("button").classList.toggle("invisible")

console.log(document.getElementsByTagName("li")[0].firstElementChild.innerHTML)
document.getElementsByTagName("li")[0].firstElementChild.innerHTML = "<strong>Sike</strong>"


document.querySelector(".list  a").setAttribute("href", "https://www.bing.com")
