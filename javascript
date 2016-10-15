基础知识
1：确定浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）。
    var w=window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var h=window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

2：返回浏览器窗口的尺寸（不包括工具栏和滚动条） 和 内容视窗的尺寸（包括滚动条以及内容,内容视窗其实包括浏览器全部内容的大小）
    //
    // getPageSize()
    // Returns array with page width, height and window width, height
    // Core code from - quirksmode.org
    // Edit for Firefox by pHaez
    //
    function getPageSize(){

      var xScroll, yScroll;

      if (window.innerHeight && window.scrollMaxY) {	
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
      } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
      } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
      }

      var windowWidth, windowHeight;
      if (self.innerHeight) {	// all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
      } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
      } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
      }	

      // for small pages with total height less then height of the viewport
      if(yScroll < windowHeight){
        pageHeight = windowHeight;
      } else { 
        pageHeight = yScroll;
      }

      // for small pages with total width less then width of the viewport
      if(xScroll < windowWidth){	
        pageWidth = windowWidth;
      } else {
        pageWidth = xScroll;
      }


      arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight) 
      return arrayPageSize;
    }
    
    3 : 避免切换img的src时img的长宽已经设定
      1：先new一个image对象；
      2：在image.onload事件中获取最新的图片大小；
      3：再把新图片的大小设置到页面去；
      4：这样就可以去掉初始化的值
