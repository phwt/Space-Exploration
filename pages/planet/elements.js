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
    this.addEventListener('click', function() {
      window.history.back();
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
    this.img = undefined;
  }

  setReadmoreEvent() {
    this.querySelector('.readmore').addEventListener('click', function() {
      console.log('you click readmore');
    });
  }

  render() {
    this.innerHTML = `
      <div class="row text-white" id="overlay" style="display: none">
        <div class="col-12 text-center overlay-box" id="box-detail">
            <h2 class="mb-0" id="overlay-name">` + this.maintitle + `</h2>
            <span id="overlay-name-en">` + this.subtitle + `</span>
            <div class="spacing line"></div>
            <img id="overlay-img" src="` + this.img + `" alt="">
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

  reloadField(maintitle, subtitle, detail, img) {
    this.maintitle = maintitle;
    this.subtitle = subtitle;
    this.detail = detail;
    this.img = img;
    this.timecalled++;

    if (this.timecalled == 1) {
      this.render();
      $(this).find('div').fadeIn();
      return;
    }

    const realThis = this;
    $(this).find('div').fadeOut(function() {
      realThis.render();
      $(realThis).find('div').fadeIn();
    });
  }
}

// Define a custom elements
window.customElements.define('heading-box', HeadingBox);
window.customElements.define('button-back', BackButton);
window.customElements.define('overlay-planet-info', OverlayPlanetInfo);
