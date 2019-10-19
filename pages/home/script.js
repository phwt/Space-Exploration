let currentSection = 0
let getSection = () => Math.floor(($(document).scrollTop() + window.innerHeight / 2) / window.innerHeight)
let numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

function fadeChangeText(elem, content) {
    $(elem).fadeOut(function () {
        $(this).text(content).fadeIn()
    })
}

function setOverlay(data) {
    fadeChangeText("#overlay-name", data.name)
    fadeChangeText("#overlay-type", data.type)
    fadeChangeText("#overlay-details", data.details)
    fadeChangeText("#overlay-orbital-period", numberWithCommas(data.orbital_period))
    fadeChangeText("#overlay-dist-sun", data.au)
    fadeChangeText("#overlay-moon", data.moons)
}

function updateSection() {
    section = getSection()
    $("#text-region").text((section > 4) ? "ระบบสุริยะชั้นนอก" : "ระบบสุริยะชั้นใน")
    $("#text-dist > .au").text(Math.floor(Math.random() * 50))
    $("#text-dist > .km").text(numberWithCommas(Math.floor(Math.random() * 50 * 149598023)))

    if (section != currentSection) {
        currentSection = section
        setOverlay(data[section - 1])
    }

    (getSection() == 0) ? $("#overlay").stop().fadeOut() : $("#overlay").stop().fadeIn()
}

let scrollDown = () => {
    $(document).scrollTop(window.innerHeight)
}

$(document).ready(function () {

    $("#overlay").hide()

    // Event handlers
    $(document).scroll(updateSection)

    $("#btn-open-section").click(() => {
        $('html, body').animate({
            scrollTop: window.innerHeight
        }, 2000)
    })

    // Background parallax scrolling
    var parallax = document.querySelectorAll("body"),
        speed = -0.05
    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px"
            el.style.backgroundPosition = elBackgrounPos
        })
    }

    // Propagate data onto page
    for (body of data) {
        $("#content-area").append('\
            <div class="h-100">\
            <div class="bodies" style="width: ' + body.size + '%">\
                <a href="' + body.link + '"><img '+ ((body.glow) ? "class='glow'" : "") +' src="' + body.img + '"></a>\
            </div>\
        </div>\
        ')
    }
})