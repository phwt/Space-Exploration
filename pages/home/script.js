// function setContent(content) {
//     $("#hidden-elem").html(content);
//     $("#box-detail").html(content);
//     $("#box-detail").height($("#hidden-elem").height());
// }

// function refreshOverlay(){
//     console.log($("#box-detail").html())
//     $("#hidden-elem").html($("#box-detail").html());
//     console.log($("#hidden-elem").height())
//     $("#box-detail").height($("#hidden-elem").height());
// }

let getSection = () => Math.floor(($(document).scrollTop() + window.innerHeight / 2) / window.innerHeight);
let numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

function fadeChangeText(elem, content) {
    $(elem).fadeOut(function () {
        if(content == null){
            $(this).fadeIn();
            return;
        }
        $(this).text(content).fadeIn();
    });
}

function setOverlay(data) {
    // fadeChangeText("#box-detail, .readmore", null)
    fadeChangeText("#overlay-name", data.name);
    fadeChangeText("#overlay-type", data.type);
    fadeChangeText("#overlay-details", data.details);
    fadeChangeText("#overlay-orbital-period", data.orbital_period);
    fadeChangeText("#overlay-dist-sun", data.au);
    fadeChangeText("#overlay-moon", data.moons);
    // refreshOverlay();
}

mock_data = [{
    name: "โลก",
    type: "ดาวเคราะห์",
    details: "ดาวเคราะห์ลำดับที่สามจากดวงอาทิตย์ และเป็นวัตถุทางดาราศาสตร์เพียงหนึ่งเดียวที่ทราบว่ามีสิ่งมีชีวิต ร้อยละ 71 ของพื้นผิวโลกปกคลุมด้วยน้ำซึ่งส่วนใหญ่เป็นมหาสมุทร อีกร้อยละ 29 ที่เหลือเป็นแผ่นดิน",
    orbital_period: 1,
    au: 1,
    moons: 1
}, {
    name: "ดาวอังคาร",
    type: "ดาวเคราะห์",
    details: "ดาวเคราะห์ลำดับที่สี่จากดวงอาทิตย์ เป็นดาวเคราะห์เล็กที่สุดอันดับที่สองในระบบสุริยะรองจากดาวพุธ เป็นดาวเคราะห์หินที่มีบรรยากาศเบาบาง มีลักษณะพื้นผิวคล้ายคลึงกับทั้งหลุมอุกกาบาตบนดวงจันทร์ และภูเขาไฟ ทะเลทราย ตลอดจนน้ำแข็งขั้วดาวที่ปรากฏบนโลก",
    orbital_period: 1.88,
    au: 1.5,
    moons: 2
}]

function updateSection() {
    $("#text-region").text((getSection() > 4) ? "ระบบสุริยะชั้นนอก" : "ระบบสุริยะชั้นใน");
    $("#text-dist > .au").text(Math.floor(Math.random() * 50));
    $("#text-dist > .km").text(numberWithCommas(Math.floor(Math.random() * 50 * 149598023)));
    setOverlay(mock_data[Math.floor(Math.random()*2)])

    if (getSection() == 0)
        $("#overlay").stop().fadeOut();
    else
        $("#overlay").stop().fadeIn();
}

$(document).ready(function () {
    // mock_loc = ["ระบบสุริยะชั้นใน", "ระบบสุริยะชั้นนอก"];
    $("#overlay").hide();
    setOverlay(mock_data[1])
    $(document).scroll(updateSection);
});