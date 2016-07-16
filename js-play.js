var myImages = new Array();

myImages[1] = "billMurray-1.jpg";
myImages[2] = "billMurray-2.jpg";

var colors = ["rgb(44,62,80)", "rgb(243,156,18)"]

//function generateImage (text, author) {
  //var newQuote = {};
  //newQuote.text = text;
  //newQuote.author = author;
  //quoteArray.push(newQuote);
//}


function generateImage(){
  var random = getRandom(myImages.length);
  var randomColor = getRandom(colors.length);
  console.log(myImages[random]);
  document.getElementById("random-images").innerHTML = myImages[random];
  document.body.style.backgroundColor = colors[randomColor];

  //document.getElementById('tweet').innerHTML = ""

  // twttr.widgets.createShareButton(
  //   '',
  //   document.getElementById('tweet'),
  //   {
  //     text: allQuotes[random].text
  //   }
  // );
}

function getRandom(length) {
  return Math.floor(Math.random() * (length -1 - 0 + 1)) + 0;
}

var random = getRandom(myImages.length);

//twttr.widgets.createShareButton(
  //'',
  //document.getElementById('tweet'),
  //{
    //text: allQuotes[random].text
  //}
//);


// generateQuote("random string", "authortest");

// console.log(allQuotes);

//document.getElementById("random-images").innerHTML = myImages[random];
document.write('<img src="'+myImages[rnd]+'" border="0">');
