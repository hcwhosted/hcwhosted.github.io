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
    this.setupSearchIQ();
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
  setupSearchIQ() {
    window.siqConfig = {
      engineKey: "2cdce557dd6f75cfcca70a1beabf0740",
      forceLoadSettings: true
    };
    window.siqConfig.baseUrl = "//pub.searchiq.co/";
    var script = document.createElement("SCRIPT");
    script.src = window.siqConfig.baseUrl +
      '/js/container/siq-container-2.js?cb=' +
      (Math.floor(Math.random()*999999)) +
      '&engineKey=' + window.siqConfig.engineKey;
    script.id = "siq-container";
    document.getElementsByTagName("HEAD")[0].appendChild(script);
  }
}

export default Navbar;
