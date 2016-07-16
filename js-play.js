var myImages = new Array();

myImages[0] = "billMurray-1.jpg";
myImages[1] = "billMurray-2.jpg";

var colors = ["rgb(44,62,80)", "rgb(243,156,18)"]

 function generateImage(){
  var random = getRandom(myImages.length);
  var randomColor = getRandom(colors.length);
  document.getElementById("random-images").src = myImages[random];
  document.body.style.backgroundColor = colors[randomColor];

}


//function generateImage(){
  //var random = getRandom(myImages.length);
  //var randomColor = getRandom(colors.length);
  //console.log(myImages[random]);
  //document.getElementById("random-images").innerHTML = myImages[random];
  //document.body.style.backgroundColor = colors[randomColor];
//}

function getRandom(length) {
  return Math.floor(Math.random() * (length -1 - 0 + 1)) + 0;
}

var random = getRandom(myImages.length);



//document.getElementById("random-images").src = myImages[random];


//document.getElementById('random-images').innerHTML="<img src='images/billMurray-1.jpg' border=0/></a>";

//document.getElement('<img src="'+myImages[rnd]+'" border="0">');
