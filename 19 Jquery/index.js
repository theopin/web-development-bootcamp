$(document).ready(function() {
    $(".list").css("color", "cyan")


    //$(".list").addClass("invisible")


    $(".list").text("invisible")


    $(".list").html("<a>Hey</a>")

    


    $("a").attr("href", "https://www.google.com")

    $("button").click(function() {
        $("h1").css("background-color", "purple")
    })

    $("body").keydown(function(e) {
        $("h1").text(e.key)
    })

    $("h1").append("<button>E/KEY</button>")
    $("h1").after("<button>E/KEY</button>")


    $("h1").click(function() {
        $("h1").fadeToggle()
    })

})




// Minify to reduce size of css/js files to be rendered on user browser


