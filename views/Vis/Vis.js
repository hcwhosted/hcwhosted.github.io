import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Vis extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/Vis/template.html' },
      { type: 'text', url: 'views/Vis/doodle.svg' }
    ]);
    this.title = 'Visualizations';
  }
  setup () {
    this.d3el.html(this.resources[0]);
    this.d3el.select('.doodle').html(this.resources[1]);
  }
}

export default Vis;
