var myImages = [
  "billMurray-1.jpg",
  "billMurray-2.jpg",
  "billMurray-3.jpg",
  "billMurray-4.jpg",
  "billMurray-5.jpg",
  "billMurray-6.jpg",
  "billMurray-7.jpg",
  "billMurray-8.jpg",
  "billMurray-9.jpg",
  "billMurray-10.jpg",
]

var colors = [
  "rgb(44,62,80)",
  "rgb(81,85,35)",
  "rgb(35,55,49)",
  "rgb(55,35,40)",
  "rgb(85,39,35)",
  "rgb(35,81,85)",
  "rgb(112,128,144)",
  "rgb(70,130,180)",
  ]

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



document.getElementById("random-images").src = myImages[random];


//document.getElementById('random-images').innerHTML="<img src='images/billMurray-1.jpg' border=0/></a>";

//document.getElement('<img src="'+myImages[rnd]+'" border="0">');
