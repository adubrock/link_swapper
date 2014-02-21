
function changeLink () {
  var links = ['https://www.google.com',
               'https://news.ycombinator.com',
               'https://www.yahoo.com',
               'http://www.youtube.com'];

  var linkToChange = document.getElementById("link");
  var linkIndex = linkToChange.href.match(/\d$/);
  return linkToChange.href = links[linkIndex];
}

changeLink();