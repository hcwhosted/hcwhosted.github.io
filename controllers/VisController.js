/* globals d3 */
import BaseController from './BaseController.js';

import Gallery from '../views/Gallery/Gallery.js';

class VisController extends BaseController {
  constructor () {
    super();
    this.gallery = new Gallery(d3.select('.galleryWrapper'));
  }
}

window.controller = new VisController();
