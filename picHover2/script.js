/*jshint esversion: 6*/

let running;
let ended;




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
    document.getElementById(pic).style.opacity = "0";
    document.getElementById("face2").style.opacity = "0";
    document.getElementById("face3").style.opacity = "0";
    document.getElementById("face4").style.opacity = "1";

    //pic1
    setTimeout(function(){
      document.getElementById("face4").style.opacity = "0.5";
      document.getElementById("face3").style.opacity = "0.5";
    }, 50);
    //pic2
    setTimeout(function(){
      document.getElementById("face3").style.opacity = "1";
      document.getElementById("face2").style.opacity = "0.5";
      document.getElementById("face4").style.opacity = "0";
    }, 100);
    //pic3
    setTimeout(function(){
      document.getElementById("face3").style.opacity = "0";
      document.getElementById("face2").style.opacity = "0.5";
      document.getElementById(pic).style.opacity = "0.5";

    }, 150);
    //pic4
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "1";
      document.getElementById("face2").style.opacity = "0";
    }, 200);


}


function animateEyesOpen(pic){
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "0.75";
      document.getElementById("face2").style.opacity = "0.5";
    }, 50);
    //pic2
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "0.5";
      document.getElementById("face2").style.opacity = "1";
    }, 100);
    //pic3
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "0";
      document.getElementById("face2").style.opacity = "0";
      document.getElementById("face3").style.opacity = "1";
    }, 150);
    //pic4
    setTimeout(function(){
      document.getElementById(pic).style.opacity = "0";
      document.getElementById("face3").style.opacity = "0";
      document.getElementById("face4").style.opacity = "1";
    }, 200);

}



function passControl(pic){
  if(!running){
    animateEyesClose(pic);
  }else{
    setTimeout(function(){
      animateEyesClose(pic);
       {
      }
    }, 250);

    setTimeout(function(){

      if(pic=="lips"){
        if ($('#area1:hover').length == 0){
          if($('#huuled:hover').length == 0){
            checkRunning(pic);
          }
        }
      }
      if(pic=="eyes"){
        if ($('#area3:hover').length == 0){
          if ($('#area2:hover').length == 0){
            if($('#silmaliner:hover').length == 0){
              checkRunning(pic);
            }

          }
        }
      }

      if(pic=="brow"){
        if ($('#area5:hover').length == 0){
          if ($('#area4:hover').length == 0){
            if($('#brows:hover').length == 0){
              checkRunning(pic);
            }
          }
        }
      }

    }, 255);
  }
}

function checkRunning(pic){
  running = true;
  animateEyesOpen(pic);
  setTimeout(function(){
    running = false;
  }, 300);
}

$("#area1").hover(function(){
  let pic = "lips";
  passControl(pic);
}, function(){
    console.log("area1");
    let pic = "lips";
    checkRunning(pic);
});



document.getElementById("area2").addEventListener('mouseover', function(){
  let pic = "eyes";
  //connsole log check
  console.log("in2");
  passControl(pic);
});

document.getElementById("area3").addEventListener('mouseover', function(){
  let pic = "eyes";
  //connsole log check
  console.log("in3");
  passControl(pic);
});

document.getElementById("area4").addEventListener('mouseover', function(){
  let pic = "brow";
  //connsole log check
  console.log("in4");
  passControl(pic);
});

document.getElementById("area5").addEventListener('mouseover', function(){
  let pic = "brow";
  //connsole log check
  console.log("in5");
  passControl(pic);
});

//MOUSEOUT







document.getElementById("area2").addEventListener('mouseout', function(){
  let pic = "eyes";
  checkRunning(pic);
});

document.getElementById("area3").addEventListener('mouseout', function(){
  let pic = "eyes";
  checkRunning(pic);
});

document.getElementById("area4").addEventListener('mouseout', function(){
  let pic = "brow";
  //connsole log check
  checkRunning(pic);
});

document.getElementById("area5").addEventListener('mouseout', function(){
  let pic = "brow";
  //connsole log check
  checkRunning(pic);
});


document.getElementById("brows").addEventListener('mouseenter', function(){
  let pic = "brow";
  passControl(pic);
});

document.getElementById("brows").addEventListener('mouseleave', function(){
  let pic = "brow";
  console.log("out");
    checkRunning(pic);
});

document.getElementById("silmaliner").addEventListener('mouseenter', function(){
  let pic = "eyes";
  passControl(pic);
});

document.getElementById("silmaliner").addEventListener('mouseleave', function(){
  let pic = "eyes";
  console.log("out");
    checkRunning(pic);
});

document.getElementById("huuled").addEventListener('mouseenter', function(){
  let pic = "lips";
  passControl(pic);
});

document.getElementById("huuled").addEventListener('mouseleave', function(){
  let pic = "lips";
  console.log("out");
    checkRunning(pic);
});
