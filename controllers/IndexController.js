/* globals d3 */
import BaseController from './BaseController.js';

import StatusWidget from '../views/StatusWidget/StatusWidget.js';

class IndexController extends BaseController {
  constructor () {
    super();
    this.gallery = new StatusWidget(d3.select('.StatusWidget'));
  }
}

window.controller = new IndexController();
