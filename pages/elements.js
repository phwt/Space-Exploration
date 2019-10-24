class CelestialBodies extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="h-100">
                <div class="bodies" style="width:` + this.getAttribute('size') + `%">
                    <a href="planet?p=` + this.getAttribute('id') + `">
                        <img src="` + this.getAttribute('src') + `">
                    </a>
                </div>
            </div>`;
  }
}

class OverlayInfo extends HTMLElement {
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

  render(display) {
    this.innerHTML = `
        <div class="row text-white" id="overlay-l"  ` + ((display) ? 'style="display: none"' : '') + `>
            <div class="col-12 text-center overlay-box bottom" id="box-detail">
                <h2 class="mb-0">` + this.name + `</h2>
                <span>` + this.type + `</span>
                <div class="spacing line"></div>
                <span>` + this.detail + `</span>
                <div class="spacing line"></div>
                <div class="row row-info">` + this.getFields() + `</div>
            </div>
            <div class="col-12 overlay-box readmore text-center" onclick="window.location.assign('planet?p=` + this.link + `')"> อ่านเพิ่มเติม &gt; </div>
        </div>
        `;
  }

  test() {
    alert();
  }

  connectedCallback() {
    this.render();
  }

  reloadField(name, type, detail, link, field, custom) {
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

    const realThis = this;
    $(this).find('div').fadeOut(function() {
      realThis.render(true);
      $(realThis).find('div').fadeIn();
    });
  }
}

class OverlayAU extends HTMLElement {
  constructor() {
    super();
    this.region = '[region]';
    this.au = 0;
  }

  getAUinKM() {
    return numberWithCommas(Math.floor(this.au * 149597871));
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

// Define a custom elements
window.customElements.define('celestial-bodies', CelestialBodies);
window.customElements.define('overlay-info', OverlayInfo);
window.customElements.define('overlay-au', OverlayAU);
