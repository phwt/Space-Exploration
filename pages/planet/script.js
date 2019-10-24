// Need to be changed dynamically with PHP later.
let current_page = 3;

$(document).ready(function () {

    $(data[current_page].poi).each(function(index, value){
        // console.log(value)
        $("#marker-here").append("\
            <div class='poi-point' style='left:"+ value.x + "%;top:" + value.y + "%' poi-id='"+ value.id +"'></div>\
        ")
    })

    // for(poi in data[current_page].poi){
    //     console.log(data[current_page].poi)
    //     console.log(poi)
    //     $("#marker-here").append("\
    //         <div class='poi-point' poi-id='"+ poi.id +"'></div>\
    //     ")
    // }

    $("#overlay").hide()

    $(".poi-point").click(function () {

        poi_id = parseInt($(this).attr("poi-id"))

        $("#overlay").fadeOut(function () {
            $("#overlay-name").text(data[current_page].poi[poi_id].title)
            $("#overlay-name-en").text(data[current_page].poi[poi_id].title_en)
            $("#overlay-info").text(data[current_page].poi[poi_id].desc)
            $("#overlay-img").attr("src", data[current_page].poi[poi_id].image)
            $(this).fadeIn()
        })
    })

    $(".readmore").click(function () {
        console.log("you clicked")
    })
})