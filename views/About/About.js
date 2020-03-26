import { View } from '../../node_modules/uki/dist/uki.esm.js';

class About extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/About/template.html' },
      { type: 'less', url: 'views/About/style.less' }
    ]);
    this.title = 'About';
  }
  setup () {
    this.d3el.html(this.resources[0]);
  }
}

export default About;
