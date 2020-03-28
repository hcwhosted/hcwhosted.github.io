/* globals baguetteBox */
import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Gallery extends View {
  constructor (d3el) {
    super(d3el, [
      { type: 'text', url: 'views/Gallery/template.html' },
      { type: 'text', url: 'views/Gallery/cardTemplate.html' },
      { type: 'less', url: 'views/Gallery/style.less' }
    ]);
  }
  setup () {
    this.d3el.html(this.resources[0]);

    const images = [
      'doodle.svg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
      'image6.jpg'
    ];

    const cardsEnter = this.d3el.select('.galleryContents')
      .selectAll('.cardWrapper').data(images)
      .enter().append('div')
      .classed('cardWrapper', true)
      .classed('col-md-6', true)
      .classed('col-lg-4', true);

    cardsEnter.html(this.resources[1]);

    cardsEnter.select('a')
      .attr('href', d => `vis-photos/${d}`);
    cardsEnter.select('img')
      .attr('src', d => `vis-photos/${d}`);

    baguetteBox.run('.cards-gallery', {
      animation: 'slideIn'
    });
  }
}

export default Gallery;
