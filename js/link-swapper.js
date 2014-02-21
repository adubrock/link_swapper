
function changeLink () {
  var links = ['https://www.google.com',
               'https://news.ycombinator.com',
               'https://www.yahoo.com',
               'http://www.youtube.com',
               'http://www.cnn.com',
               'http://www.oregonlive.com',
               'http://www.espn.com'],
      numLinks = document.getElementsByClassName("link").length;

  for (i = 0; i < numLinks; i++) {
    var linkIndex = document.getElementsByClassName("link")[i].href.match(/\d+$/);
    document.getElementsByClassName("link")[i].href = links[linkIndex];
  }
}

changeLink();
