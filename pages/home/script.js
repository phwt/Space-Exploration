let currentSection = 0
let getSection = () => Math.floor(($(document).scrollTop() + window.innerHeight / 2) / window.innerHeight)
let getSectionMid = () => Math.floor($(document).scrollTop() / window.innerHeight)
let getMidpoint = (section) => (section * window.innerHeight) + (window.innerHeight / 2)
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
    
    try{    
        scroll_percentage = calcPercent(getMidpoint(getSectionMid()), $(document).scrollTop() + window.innerHeight / 2 )
        set_au = calcAU(getSectionMid())
        dist_au = scroll_percentage * (set_au.bottom - set_au.top) + set_au.top
        $("#text-dist > .au").text(Math.floor(dist_au * 100) / 100)
        $("#text-dist > .km").text(numberWithCommas(Math.floor(dist_au * 149597871)))
    }catch(TypeError){
        // do nothing
    }

    if(section == 0)
        $("#overlay").stop().fadeOut()
    else
        $("#overlay").stop().fadeIn()

    if (section != currentSection) {
        currentSection = section
        try{
            setOverlay(data[section - 1])
        }catch(TypeError){
            // do nothing
        }
    }
}

function calcAU(section){
    if(section == 1)
        return {top: 0, bottom: data[section].au}
    return {top: data[section-1].au, bottom: data[section].au}
}

function calcPercent(start, current){
    return ((current - start) / ((start + window.innerHeight) - start))
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

    $(".overlay-box.readmore").click(() => {
        alert("you clicked " + data[getSection()-1].name)
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