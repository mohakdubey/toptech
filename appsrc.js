var articlelist=new Array("http://www.fulltextrssfeed.com/techcrunch.com/rssfeeds/","http://www.fulltextrssfeed.com/engadget.com/rss.xml","http://www.fulltextrssfeed.com/lifehacker.com/RSS/","http://www.fulltextrssfeed.com/gizmodo.com/rss","http://www.fulltextrssfeed.com/feeds.wired.com/wired/index","http://www.fulltextrssfeed.com/rss.slashdot.org/Slashdot/slashdot","http://www.fulltextrssfeed.com/pcworld.com/index.rss","http://www.fulltextrssfeed.com/feeds.feedburner.com/cnet/NnTv");
function loadfeed(elem) {
  $('#titlelist').empty();
  $('#titlelist').append('<li>Please Wait...</li>');
		var id = $(elem).attr("id");
       $.getJSON("http://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent("SELECT * FROM feed WHERE url='"+articlelist[id]+"'")+"&format=json",
          function(data) {
          		console.log(data);
              var id = data.query.results.item;
              console.log(id);
              $('#titlelist').empty();
              
              for(var i=0; i<6; i++) {
             articlelist[i]=data.query.results.item[i].description;
              console.log(data.query.results.item[i].title);
  
              $('#titlelist').append('<li><a href="index.html#desc" onclick="fullpost(this)" id='+i+'>'+data.query.results.item[i].title+'</li></a>');
              $('#titlelist').listview('refresh');
          }
          }
);
}
function fullpost(article) {
var fp= $(article).attr("id");
var fullpost=articlelist[fp];
$('#fullpost').empty();
$('#fullpost').append(fullpost);
}