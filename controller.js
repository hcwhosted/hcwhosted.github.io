/* globals d3 */
import { Model } from '/node_modules/uki/dist/uki.esm.js';

import Menu from '/views/Menu/Menu.js';

import About from '/views/About/About.js';
import Links from '/views/Links/Links.js';
import Vis from '/views/Vis/Vis.js';
import Article from '/views/Article/Article.js';

class Controller extends Model {
  constructor () {
    super();
    this.views = [
      new About(d3.select('#About')),
      new Links(d3.select('#Links')),
      new Vis(d3.select('#Vis')),
      new Article(d3.select('#Article'))
    ];
    this._currentViewIndex = 0;
    this.menu = new Menu(d3.select('#Menu'));
  }
  get currentView () {
    return this.views[this._currentViewIndex];
  }
  set currentView (view) {
    this._currentViewIndex = this.views.indexOf(view);
    for (const otherView of this.views) {
      otherView.d3el.classed('current', otherView === view);
    }
    this.menu.render();
    view.render();
  }
}

window.controller = new Controller();
