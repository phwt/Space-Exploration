class CelestialBodies extends HTMLElement {
  render() {
    this.innerHTML = `
        <div class="h-100">
            <div class="bodies" style="width:` + this.getAttribute('size') + `%">` +
                    ((this.getAttribute('link') == 'true') ? `<a href="planet?p=` + this.getAttribute('id') + `">` : `<a href="javascript:">`)+
                    `<img style="animation-name: planet-tilt;
                    animation-duration: 2.5s;
                    animation-delay: `+ Math.random() * 2 +`s;
                    animation-iteration-count: infinite;" src="` + this.getAttribute('src') + `">
                </a>
            </div>
        </div>`;
  }
  connectedCallback() {
    this.render();
  }
  static get observedAttributes() {
    return ['link'];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }
}

class OverlayAU extends HTMLElement {
  constructor() {
    super();
    this.region = '[region]';
    this.au = 0;
  }

  getAUinKM() {
    let km = Math.floor(this.au * 149597871);
    km = Math.round(km / 10000)/100;
    return (isNaN(km)) ? '-' : numberWithCommas(km) + ' ล้าน';
  }

  render() {
    this.innerHTML = `
      <div class="row text-white" id="overlay-r">
          <div class="col-12 overlay-box top">
              <div class="row no-gutters text-center">
                  <div class="col-12 text-details bottom-rule">` + this.region + `</div>
                  <div class="spacing line-narrow"></div>
                  <div class="col-12 text-info-head">ตำแหน่งปัจจุบัน</div>
                  <div class="spacing"></div>
                  <div class="col-12 text-details bottom-rule">` + this.au + ` AU / ` + this.getAUinKM() + ` กม.</div>
                  <div class="spacing line-narrow"></div>
                  <div class="col-12 text-info-head">ระยะห่างจากดวงอาทิตย์</div>
              </div>
          </div>
          <div class="col-12 text-center tips">
              AU: Astronomical Unit / หน่วยดาราศาสตร์<br>
              ระยะห่างระหว่างโลกกับดวงอาทิตย์<br>
              1 AU = 149,597,871 กิโลเมตร
          </div>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }

  reloadField(region, au) {
    this.region = region;
    this.au = au;
    this.render();
  }
}

class HeadingBox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="info text-right">
        <span id="heading-th">` + this.getAttribute('maintitle') + `</span>
        <span id="heading-en">` + this.getAttribute('subtitle') + `</span>
      </div>
    `;
  }
}

class BackButton extends HTMLElement {
  constructor() {
    super();
    this.backEvent();
  }
  backEvent() {
    this.addEventListener('click', () => {
      window.location.assign('../index.php?s=' + this.getAttribute('where'));
    });
  }
  connectedCallback() {
    this.innerHTML = `<div class="back">
      <h2><span class="triangle">◀&#xFE0E;</span> กลับ</h2>
    </div>`;
  }
}

class OverlayPlanetInfo extends HTMLElement {
  constructor() {
    super();
    this.timecalled = 0;
    this.maintitle = '[maintitle]';
    this.subtitle = '[subtitle]';
    this.detail = '[detail]';
    this.poi = undefined;
    this.link = undefined;
  }

  setReadmoreEvent() {
    this.querySelector('.readmore').addEventListener('click', () => {
      window.location.assign('../planet_files/?c=' + this.poi);
    });
  }

  render() {
    this.innerHTML = `
      <div class="row text-white" id="overlay" style="display: none">
        <div class="col-12 text-center overlay-box" id="box-detail">
            <h2 class="mb-0" id="overlay-name">` + this.maintitle + `</h2>
            <span id="overlay-name-en">` + this.subtitle + `</span>
            <div class="spacing line"></div>
            <img id="overlay-img" src="../planet_files/subpage/` + this.poi + `/cover.jpg" alt="">
            <div class="spacing line"></div>

            <div id="overlay-info">` + this.detail + `</div>
        </div>
        <div class="col-12 overlay-box readmore text-center"> อ่านเพิ่มเติม &gt; </div>
    </div>
    `;
    this.setReadmoreEvent();
  }

  connectedCallback() {
    this.render();
  }

  reloadField(maintitle, subtitle, detail, poi) {
    this.maintitle = maintitle;
    this.subtitle = subtitle;
    this.detail = detail;
    this.poi = poi;
    this.timecalled++;

    if (this.timecalled == 1) {
      this.render();
      $(this).find('div').fadeIn();
      return;
    }

    $(this).find('div').fadeOut(() => {
      this.render();
      $(this).find('div').fadeIn();
    });
  }
}

class POIPoint extends HTMLElement {
  constructor() {
    super();
    this.poiID = undefined;
    this.x = 0;
    this.y = 0;
  }

  connectedCallback() {
    this.poiID = this.getAttribute('poi-id');
    this.innerHTML = `
      <div class='poi-point' style='animation-delay: `+ Math.random() * 2 +`s;left: ` + this.getAttribute('x') + `%; top: ` + this.getAttribute('y') + `%;'></div>
    `;
    this.addEventListener('click', () => {
      document.querySelectorAll('overlay-planet-info')[0].reloadField(
          window.data_poi[this.poiID].title,
          window.data_poi[this.poiID].title_en,
          window.data_poi[this.poiID].excerpt_long,
          this.poiID
      );
    });
  }
}

class OverlayInfo extends OverlayPlanetInfo {
  constructor() {
    super();
    this.name = '[name]';
    this.type = '[type]';
    this.detail = '[detail]';
    this.link = '0';
    this.field = [
      ['ระยะเวลาการโคจร', 0, 'วัน (โลก)'],
      ['ระยะห่างจากดวงอาทิตย์', 0, 'AU'],
      ['จำนวนดาวบริวาร', 0, 'ดวง'],
    ];
  }

  setReadmoreEvent() {
    this.querySelector('.readmore').addEventListener('click', () => {
      window.location.assign('planet?p=' + this.link);
    });
  }

  getFields() {
    let fieldElem = '';

    this.field.forEach((element) => {
      fieldElem += `
                <div class="col-12">
                    <span class="font-weight-bold">` + element[0] + `</span>
                    <span class="field-value">` + element[1] + `</span>` + element[2] + `
                </div>`;
    });
    return fieldElem;
  }

  render(hide) {
    this.innerHTML = `
        <div class="row text-white" id="overlay-l" style="display: none">
            <div class="col-12 text-center overlay-box bottom" id="box-detail">
                <h2 class="mb-0">` + this.name + `</h2>
                <span>` + this.type + `</span>
                <div class="spacing line"></div>
                <span>` + this.detail + `</span>
                <div class="spacing line"></div>
                <div class="row row-info">` + this.getFields() + `</div>
            </div>
            <div class="col-12 overlay-box readmore text-center ` + ((hide) ? 'd-none' : '') + `"> อ่านเพิ่มเติม &gt; </div>
        </div>
        `;
    this.setReadmoreEvent();
  }

  reloadField(name, type, detail, link, field, custom, hide) {
    this.timecalled = 0;
    this.name = name;
    this.type = type;
    this.detail = detail;
    this.link = link;

    if (custom != undefined) {
      this.field = custom;
    } else {
      this.field = [
        ['ระยะเวลาการโคจร', 0, 'วัน (โลก)'],
        ['ระยะห่างจากดวงอาทิตย์', 0, 'AU'],
        ['จำนวนดาวบริวาร', 0, 'ดวง'],
      ];

      if (field.length != 3) throw 'Param \'field\' must have exactly 3 values';
      field.forEach((element, index) => {
        this.field[index][1] = element;
      });
    }

    this.timecalled++;

    if (this.timecalled == 1) {
      this.render(hide);
      $(this).find('div').fadeIn();
      return;
    }

    $(this).find('div').fadeOut(() => {
      this.render(hide);
      $(this).find('div').fadeIn();
    });
  }
}

class CurrentCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>
      <h4>▶&#xFE0E;&nbsp;` + this.getAttribute('heading') + `</h4>
      ` + this.getAttribute('excerpt') + `
      </div><hr>
    `;
  }
}

class RelatedCard extends CurrentCard {
  constructor() {
    super();
    this.addEventListener('click', () => {
      window.location.assign('?c=' + this.getAttribute('link'));
    });
  }

  connectedCallback() {
    this.innerHTML = `<div>
      <h4>` + this.getAttribute('heading') + `</h4>
      ` + this.getAttribute('excerpt') + `
      </div><hr>
    `;
  }
}

class FilesButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="files">
            <div class="wrapper">
                <h2 class="text-nowrap">แฟ้มข้อมูล</h2>
            </div>
        </div>
        `;

    this.addEventListener('click', () => {
      window.location.assign('../planet_files/?v=' + this.getAttribute('topics'));
    });
  }
}

class BackSpecificButton extends BackButton {
  constructor() {
    super();
  }
  backEvent() {
    this.addEventListener('click', () => {
      window.location.assign('../planet?p=' + this.getAttribute('where'));
    });
  }
}

// Main Page custom elements
window.customElements.define('celestial-bodies', CelestialBodies);
window.customElements.define('overlay-info', OverlayInfo);
window.customElements.define('overlay-au', OverlayAU);

// Sub-page custom elements
window.customElements.define('heading-box', HeadingBox);
window.customElements.define('button-back', BackButton);
window.customElements.define('button-back-spc', BackSpecificButton);
window.customElements.define('overlay-planet-info', OverlayPlanetInfo);
window.customElements.define('poi-point', POIPoint);
window.customElements.define('button-files', FilesButton);

// File page custom elements
window.customElements.define('card-current', CurrentCard);
window.customElements.define('card-related', RelatedCard);
