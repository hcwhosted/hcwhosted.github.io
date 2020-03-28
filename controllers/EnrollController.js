/* globals d3 */
import BaseController from './BaseController.js';

import StatusWidget from '../views/StatusWidget/StatusWidget.js';

class EnrollController extends BaseController {
  constructor () {
    super();
    this.statusWidget = new StatusWidget(d3.select('.StatusWidget'));
  }
}

window.controller = new EnrollController();
