let currentSection = 0
let getSection = () => Math.floor(($(document).scrollTop() + window.innerHeight / 2) / window.innerHeight)
let getSectionMid = () => Math.floor($(document).scrollTop() / window.innerHeight)
let getMidpoint = (section) => (section * window.innerHeight) + (window.innerHeight / 2)
let numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
let calcPercent = (start, current) => ((current - start) / ((start + window.innerHeight) - start))

let data;
$.getJSON('data.json',function(datas){
    console.log('success');
    data = datas;
});

function setOverlay(data) {

    document.querySelector("#overlay-info").reloadField(
        data.name,
        data.type,
        data.details,
        data.link,
        [
            numberWithCommas(data.orbital_period),
            data.au,
            data.moons
        ],
        data.custom
    );
}

function updateSection() {
    section = getSection()

    try {
        scroll_percentage = calcPercent(getMidpoint(getSectionMid()), $(document).scrollTop() + window.innerHeight / 2)
        set_au = calcAU(getSectionMid())
        dist_au = scroll_percentage * (set_au.bottom - set_au.top) + set_au.top
        au = Math.floor(dist_au * 100) / 100;
    } catch (TypeError) {
        au = 0;
    }

    document.querySelector("#overlay-au").reloadField(((section > 4) ? "ระบบสุริยะชั้นนอก" : "ระบบสุริยะชั้นใน"), au);

    if (section == 0)
        $("#overlay-l, #overlay-r").stop().fadeOut()
    else
        $("#overlay-r").fadeIn()

    if (section != currentSection) {
        currentSection = section
        try {
            setOverlay(data[section - 1])
        } catch (TypeError) {
            //do nothing
        }
    }
}

function calcAU(section) {
    if (section == 1)
        return {
            top: 0,
            bottom: data[section].au
        }
    return {
        top: data[section - 1].au,
        bottom: data[section].au
    }
}

$(document).ready(function () {

    $("#overlay-l, #overlay-r").hide()

    // Event handlers
    $(document).scroll(updateSection)

    $("#btn-open-section").click(() => {
        $('html, body').animate({
            scrollTop: window.innerHeight
        }, 2000)
    })

    $(".overlay-box.readmore").click(() => {
        window.location = "planet?p=" + data[getSection() - 1].link
    })


    // Temporary disable
    // Background parallax scrolling
    // var parallax = document.querySelectorAll("body"),
    //     speed = -0.05
    // window.onscroll = function () {
    //     [].slice.call(parallax).forEach(function (el, i) {
    //         var windowYOffset = window.pageYOffset,
    //             elBackgrounPos = "50% " + (windowYOffset * speed) + "px"
    //         el.style.backgroundPosition = elBackgrounPos
    //     })
    // }
})