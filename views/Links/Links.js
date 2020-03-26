import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Links extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/Links/template.html' },
      { type: 'less', url: 'views/Links/style.less' }
    ]);
    this.title = 'Useful Links';
  }
  setup () {
    this.d3el.html(this.resources[0]);
  }
}

export default Links;
