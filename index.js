// following basic example 

//
  // If absolute URL from the remote server is provided, configure the CORS
  // header on that server.
  //
  var url = './article_unfinished.pdf';

  //
  // The workerSrc property shall be specified.
  //
 pdfjsLib.GlobalWorkerOptions.workerSrc ='https://cdn.jsdelivr.net/npm/pdfjs-dist@2.3.200/build/pdf.worker.js';
let render = (pdf)=> {
 let ob = {}
 ob.page = 1
 ob.start = (num)=> {

    pdf.getPage(num).then(function(page) {
      var scale = 1;
      var viewport = page.getViewport({ scale: scale, });

      //
      // Prepare canvas using PDF page dimensions
      //
      var canvas = document.getElementById('the-canvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      //
      // Render PDF page into canvas context
      //
      var renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
    });
    ob.bindButtons = ()=> {
        document.querySelector("#next").addEventListener("click",()=> {
            ob.page+=1
            ob.start(ob.page)
        })
        document.querySelector("#prev").addEventListener("click",()=> {
            ob.page-=1
            ob.start(ob.page)
        })
    }
 }
 return ob
}
  //
  // Asynchronous download PDF
  //

  var loadingTask = pdfjsLib.getDocument(url);
  loadingTask.promise.then(function(pdf) {
    //
    // Fetch the first page
    //
    let pdfsession = render(pdf)
    pdfsession.start(1)
    pdfsession.bindButtons()
  });