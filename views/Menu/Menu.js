/* globals d3 */
import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Menu extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/Menu/template.html' }
    ]);
  }
  setup () {
    this.d3el.html(this.resources[0]);

    const menuItemsEnter = this.d3el
      .select('ul').selectAll('li')
      .data(window.controller.views)
      .enter().append('li').classed('nav-item', true);

    menuItemsEnter.append('a')
      .classed('nav-link', true)
      .attr('href', '#')
      .text(d => d.title);

    menuItemsEnter.on('click', d => {
      window.controller.currentView = d;
    });
  }
  draw () {
    this.d3el.select('ul').selectAll('li')
      .classed('active', d => d === window.controller.currentView);
    d3.select('.viewHolder').selectAll('.view')
      .classed('active', function () {
        return window.controller.currentView.d3el.node() === this;
      });
  }
}

export default Menu;
