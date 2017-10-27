window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};

var vic = document.getElementById('falling');
var lost1 = document.getElementById('lost1');
var lost2 = document.getElementById('lost2');
var no1 = document.getElementById('no1');
var no2 = document.getElementById('no2');
var no3 = document.getElementById('no3');

function scrollVic() {
    var scrollTop = window.pageYOffset;
    
    vic.style.top = 100 + scrollTop * 0.8 + 'px';
    lost1.style.top = 1000 - (scrollTop * 0.8) + 'px';
    lost2.style.top = 1800 - (scrollTop * 1.5) + 'px';
    no1.style.top = 700 - (scrollTop * 1.3) + 'px';
    no2.style.top = 900 - (scrollTop * 0.7) + 'px';
    no3.style.top = 1600 - (scrollTop * 1.8) + 'px';
}

window.addEventListener('scroll', function() {
   requestAnimationFrame(scrollVic) 
}, false);