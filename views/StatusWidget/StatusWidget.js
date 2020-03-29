/* globals d3 */
import { View } from '../../node_modules/uki/dist/uki.esm.js';

class StatusWidget extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/StatusWidget/template.html' },
      { type: 'text', url: 'views/StatusWidget/stage0.html' },
      { type: 'text', url: 'views/StatusWidget/stage1.html' },
      { type: 'text', url: 'views/StatusWidget/stage2.html' },
      { type: 'text', url: 'views/StatusWidget/stage3.html' },
      { type: 'text', url: 'views/StatusWidget/stage4.html' },
      { type: 'less', url: 'views/StatusWidget/style.less' }
    ]);
  }
  get myStage () {
    return parseInt(window.localStorage.getItem('stage') || '0');
  }
  set myStage (value) {
    window.localStorage.setItem('stage', value);
    this.render();
  }
  setup () {
    this.d3el.html(this.resources[0]);
  }
  draw () {
    const sections = this.d3el.select('.row').selectAll('.col');
    sections.classed('selected', (d, i) => i === this.myStage);
    sections.select('.btn')
      .classed('btn-outline-primary', (d, i) => i !== this.myStage)
      .classed('btn-primary', (d, i) => i === this.myStage)
      .on('click', (d, i) => {
        this.myStage = i;
      });
    this.d3el.select('.stageGuidance')
      .html(this.resources[this.myStage + 1]);
  }
}

export default StatusWidget;
