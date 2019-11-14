window.mobilecheck = function() {
  let check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

if (window.mobilecheck()) {
  alert('เพื่อประสบการณ์ในการรับชมที่ดีที่สุด โปรดรับชมบนเดสก์ทอป');
}

let currentSection = 0;
const getSection = () => Math.floor(($(document).scrollTop() + window.innerHeight / 2) / window.innerHeight);
const getSectionMid = () => Math.floor($(document).scrollTop() / window.innerHeight);
const getMidpoint = (section) => (section * window.innerHeight) + (window.innerHeight / 2);
const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const calcPercent = (start, current) => ((current - start) / ((start + window.innerHeight) - start));
window.success = false;
let data;
$.getJSON('data.json', function(datas) {
  window.success = true;
  data = datas;
});

function setOverlay(data) {
  document.querySelector('#overlay-info').reloadField(
      data.name,
      data.type,
      data.details,
      data.link,
      [
        numberWithCommas(data.orbital_period),
        data.au,
        data.moons,
      ],
      data.custom,
      data.hide
  );
}

function updateSection() {
  section = getSection();

  try {
    scroll_percentage = calcPercent(getMidpoint(getSectionMid()), $(document).scrollTop() + window.innerHeight / 2);
    set_au = calcAU(getSectionMid());
    dist_au = scroll_percentage * (set_au.bottom - set_au.top) + set_au.top;
    au = Math.floor(dist_au * 100) / 100;
  } catch (err) {
    au = '-';
  }

  if (isNaN(au)) {
    au = '-';
  }

  // console.log(section)

  if (section >= 11){
    $("#bottom-cover").fadeIn();
  }else{
    $("#bottom-cover").fadeOut();
  }

  if (section == 0) {
    $('#overlay-l, #overlay-r').stop().fadeOut();
  // } else if (section > 10) {
    // $('#overlay-l, #overlay-r').fadeOut();
  } else {
    document.querySelector('#overlay-au').reloadField(((section > 5) ? 'ระบบสุริยะชั้นนอก' : 'ระบบสุริยะชั้นใน'), au);
    $('#overlay-r').fadeIn();
  }

  if (section != currentSection) {
    currentSection = section;
    try {
      setOverlay(data[section - 1]);
    } catch (TypeError) {
      // do nothing
    }
  }
}

function calcAU(section) {
  if (section == 1) {
    return {
      top: 0,
      bottom: data[section].au,
    };
  }
  return {
    top: data[section - 1].au,
    bottom: data[section].au,
  };
}

$(document).ready(function() {
  $('#overlay-l, #overlay-r').hide();

  // Event handlers
  $(document).scroll(updateSection);

  $('#btn-open-section').click(() => {
    $('html, body').animate({
      scrollTop: window.innerHeight,
    }, 2000);
  });

  $('.overlay-box.readmore').click(() => {
    window.location = 'planet?p=' + data[getSection() - 1].link;
  });


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
});
