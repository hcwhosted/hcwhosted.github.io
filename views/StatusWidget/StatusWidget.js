/* globals d3 */
import { View } from '../../node_modules/uki/dist/uki.esm.js';

class StatusWidget extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/StatusWidget/template.html' },
      { type: 'csv', url: 'views/StatusWidget/fakeData.csv' },
      { type: 'less', url: 'views/StatusWidget/style.less' }
    ]);
    this.statusChanged = false;
  }
  get myStage () {
    return window.localStorage.getItem('stage') || '0';
  }
  set myStage (value) {
    window.localStorage.setItem('stage', value);
    this.render();
  }
  setup () {
    this.d3el.html(this.resources[0]);
    for (const stage of this.resources[1]) {
      stage.count = parseInt(stage.count);
    }

    this.d3el.select('.row').selectAll('.col')
      .data(this.resources[1]);
  }
  draw () {
    const maxCount = d3.max(this.resources[1], d => {
      return d.stage === this.myStage ? d.count + 1 : d.count;
    });

    const sections = this.d3el.select('.row').selectAll('.col');
    sections.classed('selected', d => d.stage === this.myStage);
    sections.select('.btn')
      .classed('btn-outline-primary', d => d.stage !== this.myStage)
      .classed('btn-primary', d => d.stage === this.myStage)
      .on('click', d => {
        this.myStage = d.stage;
        this.statusChanged = true;
      });
    sections.select('.count').text(d => {
      return d.stage === this.myStage ? d.count + 1 : d.count;
    });
    sections.select('.bar').style('height', d => {
      const percent = d.stage === this.myStage
        ? 100 * (1 + d.count) / maxCount
        : 100 * d.count / maxCount;
      return percent + '%';
    });

    this.d3el.select('.alert')
      .classed('alert-dark', !this.statusChanged)
      .classed('alert-success', this.statusChanged);
  }
}

export default StatusWidget;
