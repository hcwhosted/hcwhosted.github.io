import { View } from '../../node_modules/uki/dist/uki.esm.js';

class Links extends View {
  constructor (d3el) {
    const id = '1XCmIU7Qsz3qJEwYso633DG2jYoD29rLZ';
    super(d3el, [
      { type: 'less', url: 'views/Links/style.less' },
      { type: 'json', url: `https://www.googleapis.com/drive/v3/files?q='${id}'+in+parents&key=AIzaSyBI94GIyr19f26_9x7DBoXUPKeda7-q8tk&fields=files(*)` }
    ]);
    this.title = 'Useful Links';
  }
  setup () {
    const links = this.d3el.selectAll('a').data(this.resources[1].files);
    links.enter().append('a')
      .attr('href', d => d.webViewLink)
      .html(d => d.name);
  }
}

export default Links;
