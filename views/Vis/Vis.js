import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Vis extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/Vis/template.html' }
    ]);
    this.title = 'Visualizations';
  }
  setup () {
    this.d3el.html(this.resources[0]);
  }
}

export default Vis;
