$(document).ready(function() {
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
