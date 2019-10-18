let currentSection = 0;
let getSection = () => Math.floor(($(document).scrollTop() + window.innerHeight / 2) / window.innerHeight)
let numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

function fadeChangeText(elem, content) {
    $(elem).fadeOut(function () {
        $(this).text(content).fadeIn();
    });
}

function setOverlay(data) {
    fadeChangeText("#overlay-name", data.name);
    fadeChangeText("#overlay-type", data.type);
    fadeChangeText("#overlay-details", data.details);
    fadeChangeText("#overlay-orbital-period", data.orbital_period);
    fadeChangeText("#overlay-dist-sun", data.au);
    fadeChangeText("#overlay-moon", data.moons);
}

function updateSection() {
    $("#text-region").text((getSection() > 4) ? "ระบบสุริยะชั้นนอก" : "ระบบสุริยะชั้นใน");
    $("#text-dist > .au").text(Math.floor(Math.random() * 50));
    $("#text-dist > .km").text(numberWithCommas(Math.floor(Math.random() * 50 * 149598023)));

    if(getSection() != currentSection){
        currentSection = getSection()
        setOverlay(data[getSection() - 1])
    }

    if (getSection() == 0)
        $("#overlay").stop().fadeOut();
    else
        $("#overlay").stop().fadeIn();
}

$(document).ready(function () {
    $("#overlay").hide();

    for(body of data){
        $("#content-area").append('\
            <div class="h-100">\
            <div class="bodies" style="width: 20%;">\
                <a href=""><img src="'+ body.img +'"></a>\
            </div>\
        </div>\
        ')
    }

    $(document).scroll(updateSection);
});