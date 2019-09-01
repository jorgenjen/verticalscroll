window.onload = function(){
  var bottom = document.getElementById("bottom");
  var top = document.getElementById("top");
  var view = document.getElementById("view");
  var intro = document.getElementById("intro");
  var bredde = window.innerWidth;
  var hoyde = window.innerHeight;
  var nav = document.getElementById("nav");
  bottom.style.marginTop = (((bredde*3) + hoyde)-(hoyde*2)) + "px";
  top.style.height = ((bredde*3) + hoyde) + "px";
  intro.style.marginTop = -((bredde*3) + hoyde) + "px";






  var logo = document.getElementById("logo");
  var logov2 = document.getElementById("logov2");
  logo.style.height = (bredde * 0.15) + "px";
  logo.style.width = (bredde * 0.128571428) + "px";
  logo.style.marginLeft = ((bredde - (bredde * 0.128571428))/2) + "px";
  logov2.style.height = (bredde * 0.07) + "px";
  var margin = hoyde/4;
  logo.style.marginTop = margin + "px";
  var pos;
  var start = false;
  var under = false;
  var v2marginleft = Number(bredde * 0.47);
  logov2.style.marginLeft = v2marginleft + "px";
//  var v2margin = -(bredde*0.07);
//  var v2sjekk = false;
//  logov2.style.marginTop = v2margin + "px";
v2sjekk = false;
v2before = true;
  window.onscroll = function(){
  //  var Vtop = Number(view.getBoundingClientRect().top);
//    var Ltop = Number(logo.getBoundingClientRect().top);
  //  if (Vtop <= (Ltop + (bredde*0.07)) && v2sjekk == false) {
    //  v2margin = v2margin - (Vtop - (Ltop + (bredde*0.07)));
  //    console.log(v2margin);
//      logov2.style.marginTop = v2margin + "px";
  //  }




    var gammelpos = pos;
    var plass = bottom.getBoundingClientRect().top;
    pos = plass - ((bredde*3)+hoyde);
    //console.log(pos);
    //console.log((gammelpos - pos));
    if (pos > (-hoyde)) {
      //console.log("gogoog");
      logov2.style.opacity = 0;
      view.style.position = "inherit";
      view.style.marginTop = "0vh";
      view.style.marginLeft = 0;
      v2before = true;
      v2marginleft =  Number(bredde * 0.47);
      bottom.style.marginTop = (((bredde*3) + hoyde)-(hoyde*2)) + "px";
      if (under == true) {
          margin = (hoyde/4 + (hoyde/9)*6.8);
          under = false;
          ///logo.style.marginTop = margin + "px";
          //console.log("kjører");
      }
      if (start == true) {
        var endring = Number(gammelpos - pos);
        margin = margin + (endring/9)*6.8;
      }

      start = true;
      var plass = (hoyde/4 + (hoyde/9)*6.8);
      logo.style.marginTop = margin + "px";

      

    }
    else if (pos<= (-hoyde)) {
      view.style.position = "fixed";
      view.style.marginTop = -(hoyde) + "px ";
      logov2.style.opacity = 1;
      bottom.style.marginTop = (((bredde*3) + hoyde)-(hoyde)) + "px";
      view.style.marginLeft = (pos+hoyde) + "px";
      under = true;
      logo.style.marginTop = (hoyde/4 + (hoyde/9)*6.9) + "px";
    //  console.log((pos + (hoyde + v2marginleft)));
    //console.log(v2marginleft);
    logov2.style.marginLeft = (bredde * 0.47) + "px";
    if (v2sjekk == true && v2before == true) {
      var endringv2 = Number(gammelpos - pos);
      v2marginleft = v2marginleft + (endringv2/2);
      logov2.style.marginLeft = v2marginleft + "px";
      console.log(v2marginleft);
    }
      v2sjekk = true;


    }
    if (pos <= (-(hoyde + (bredde/5)*3))) {
      var endringv2nr2 = Number(gammelpos - pos);
      console.log("vrnarginleft: " + v2marginleft);
      v2marginleft = Number(v2marginleft + (endringv2nr2));
      logov2.style.marginLeft = v2marginleft + "px";
    //  console.log(-(pos + (hoyde + (bredde/5)*3)));
      v2before = false;
      nav.style.marginLeft = -(pos + (hoyde + (bredde/5)*3)) + "px";
    }
    else {
      v2before = true;
    }
}
}
