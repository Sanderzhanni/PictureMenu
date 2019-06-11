/*jshint esversion: 6*/


//LEHE LAADIMISEL ANIMATSIOON

window.onload = function() {
  if (document.readyState === "complete"){
    animateOnPageLoad();
  }
};

function animateOnPageLoad(){
  setTimeout(function(){
    document.getElementById("face1").style.opacity = "0.75";
    document.getElementById("face2").style.opacity = "0.5";
  }, 100);
  //pic2
  setTimeout(function(){
    document.getElementById("face1").style.opacity = "0.5";
    document.getElementById("face2").style.opacity = "1";
  }, 150);
  //pic3
  setTimeout(function(){
    document.getElementById("face1").style.opacity = "0";
    document.getElementById("face2").style.opacity = "0";
    document.getElementById("face3").style.opacity = "1";
  }, 200);
  //pic4
  setTimeout(function(){
    document.getElementById("face1").style.opacity = "0";
    document.getElementById("face3").style.opacity = "0";
    document.getElementById("face4").style.opacity = "1";
  }, 250);
}

//SILMADE ANIMATSIOON

function animateEyesClose(pic){
  //pic1
  setTimeout(function(){
    document.getElementById("face4").style.opacity = "0.5";
    document.getElementById("face3").style.opacity = "0.5";
  }, 100);
  //pic2
  setTimeout(function(){
    document.getElementById("face3").style.opacity = "1";
    document.getElementById("face2").style.opacity = "0.5";
    document.getElementById("face4").style.opacity = "0";
  }, 150);
  //pic3
  setTimeout(function(){
    document.getElementById("face3").style.opacity = "0";
    document.getElementById("face2").style.opacity = "0.5";
    document.getElementById(pic).style.opacity = "0.5";

  }, 200);
  //pic4
  setTimeout(function(){
    document.getElementById(pic).style.opacity = "1";
    document.getElementById("face2").style.opacity = "0";
  }, 250);
}


function animateEyesOpen(pic){
  setTimeout(function(){
    document.getElementById(pic).style.opacity = "0.75";
    document.getElementById("face2").style.opacity = "0.5";
  }, 100);
  //pic2
  setTimeout(function(){
    document.getElementById(pic).style.opacity = "0.5";
    document.getElementById("face2").style.opacity = "1";
  }, 150);
  //pic3
  setTimeout(function(){
    document.getElementById(pic).style.opacity = "0";
    document.getElementById("face2").style.opacity = "0";
    document.getElementById("face3").style.opacity = "1";
  }, 200);
  //pic4
  setTimeout(function(){
    document.getElementById(pic).style.opacity = "0";
    document.getElementById("face3").style.opacity = "0";
    document.getElementById("face4").style.opacity = "1";
  }, 250);
}






//MOUSEOVER
document.getElementById("area1").addEventListener('mouseover', function(){
  let pic = "lips";
  //connsole log check
  console.log("in1");
  animateEyesClose(pic);

});//area1 end

document.getElementById("area2").addEventListener('mouseover', function(){
  let pic = "eyes";
  //connsole log check
  console.log("in2");
  animateEyesClose(pic);
});

document.getElementById("area3").addEventListener('mouseover', function(){
  let pic = "eyes";
  //connsole log check
  console.log("in3");
  animateEyesClose(pic);
});

document.getElementById("area4").addEventListener('mouseover', function(){
  let pic = "brow";
  //connsole log check
  console.log("in4");
  animateEyesClose(pic);
});

document.getElementById("area5").addEventListener('mouseover', function(){
  let pic = "brow";
  //connsole log check
  console.log("in5");
  animateEyesClose(pic);
});

//MOUSEOUT

document.getElementById("area1").addEventListener('mouseout', function(){
  let pic = "lips";
  //connsole log check
  console.log("out1");
  animateEyesOpen(pic);
});


document.getElementById("area2").addEventListener('mouseout', function(){
  let pic = "eyes";
  //connsole log check
  console.log("out2");
  animateEyesOpen(pic);
});

document.getElementById("area3").addEventListener('mouseout', function(){
  let pic = "eyes";
  //connsole log check
  console.log("out3");
  animateEyesOpen(pic);
});

document.getElementById("area4").addEventListener('mouseout', function(){
  let pic = "brow";
  //connsole log check
  console.log("out4");
  animateEyesOpen(pic);
});

document.getElementById("area5").addEventListener('mouseout', function(){
  let pic = "brow";
  //connsole log check
  console.log("out5");
  animateEyesOpen(pic);
});
