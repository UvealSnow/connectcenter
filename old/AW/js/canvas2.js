"use strict";

/* Canvas SERVICES */

var container = document.getElementById('canvas2');
var renderer2 = new FSS.CanvasRenderer();
var s = new FSS.Scene();
var l = new FSS.Light('#111122', '#f64747');
var windowHeight = $(window).height();
var homeHeight = $('#services').height();

if (homeHeight >= windowHeight){
  var canvasHeight = (homeHeight+210);
}
else{
  var canvasHeight = homeHeight+210;
}

var windowWidth = $(window).width();
var geometry = new FSS.Plane(windowWidth, canvasHeight, 7, 7);
var material = new FSS.Material('#FFFFFF', '#FFFFFF');
var mesh2 = new FSS.Mesh(geometry, material);
var now2, start2 = Date.now();

function initialise2() {
  s.add(mesh2);
  s.add(l);
  container.appendChild(renderer2.element);
  window.addEventListener('resize', resize2);
}

function resize2() {
  renderer2.setSize(container.offsetWidth, canvasHeight+360);
}

function animate2() {
  console.log("animate");
  now2 = Date.now() - start2;
  l.setPosition((windowWidth/2)*Math.sin(now2*0.001), (canvasHeight/2)*Math.cos(now2*0.0005), 60);
  renderer2.render(s);
  requestAnimationFrame(animate2);
}

initialise2();
resize2();
animate2();
    