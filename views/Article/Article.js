/* globals pdfjsLib */
import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Article extends View {
  constructor (d3el) {
    //
    // The workerSrc property shall be specified.
    //
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.js';
    super(d3el, [
      { type: 'text', url: 'views/Article/template.html' },
      pdfjsLib.getDocument('views/Article/article_unfinished.pdf').promise,
      { type: 'less', url: 'views/Article/style.less' }
    ]);
    this.title = 'Article and information';
    this.pageNumber = 1;
  }
  async showPage (pageNumber) {
    this.pageNumber = Math.max(1, Math.min(this.resources[1].numPages, pageNumber));
    const page = await this.resources[1].getPage(this.pageNumber);
    const viewport = page.getViewport({ scale: 1 });

    const canvas = this.d3el.select('#the-canvas')
      .attr('height', viewport.height)
      .attr('width', viewport.width);
    const canvasContext = canvas.node().getContext('2d');

    page.render({ canvasContext, viewport });
  }
  setup () {
    this.d3el.html(this.resources[0]);

    this.showPage(1);

    this.d3el.select('#next').on('click', () => {
      this.showPage(this.pageNumber + 1);
    });
    this.d3el.select('#prev').on('click', () => {
      this.showPage(this.pageNumber - 1);
    });
  }
}

export default Article;
