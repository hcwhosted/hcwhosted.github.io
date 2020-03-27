import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Navbar extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/Navbar/template.html' },
      { type: 'json', url: 'views/Navbar/pages.json' },
      { type: 'less', url: 'views/Navbar/style.less' }
    ]);
  }
  isCurrentPath (path) {
    const noExtension = window.location.pathname.replace('.html', '');
    return noExtension === path || (path === '/' && noExtension === '/index');
  }
  setup () {
    this.d3el.html(this.resources[0]);

    const menuItemsEnter = this.d3el.select('ul.mr-auto')
      .selectAll('li').data(this.resources[1])
      .enter().append('li').classed('nav-item', true);

    menuItemsEnter.classed('active', d => { return this.isCurrentPath(d.path); });

    menuItemsEnter.append('a')
      .classed('nav-link', true)
      .attr('href', d => d.path)
      .html(d => {
        if (this.isCurrentPath(d.path)) {
          return `${d.title} <span class="sr-only">(current)</span>`;
        } else {
          return d.title;
        }
      });
  }
}

export default Navbar;
