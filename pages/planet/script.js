// Need to be changed dynamically with PHP later.
// let current_page = 3;

$(document).ready(function() {
  $(data[current_page].poi).each(function(index, value) {
    // console.log(value)
    $('#marker-here').append(`
        <div class='poi-point' style='left:`+ value.x + `%;top:` + value.y + `%;' poi-id='`+ value.id +`'></div>
    `);
  });

  $('.poi-point').click(function() {
    poiID = parseInt($(this).attr('poi-id'));
    document.querySelectorAll('overlay-planet-info')[0].reloadField(
        data[current_page].poi[poiID].title,
        data[current_page].poi[poiID].title_en,
        data[current_page].poi[poiID].desc,
        data[current_page].poi[poiID].image
    );
  });
});
