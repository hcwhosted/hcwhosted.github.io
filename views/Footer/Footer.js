import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Footer extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/Footer/template.html' },
      { type: 'less', url: 'views/Footer/style.less' }
    ]);
  }
  setup () {
    this.d3el.html(this.resources[0]);
  }
}

export default Footer;
