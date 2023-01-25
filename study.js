// document.addEventListener('DOMContentLoaded', function() {
//    var timer = window.setInterval(
//       function() {
//          var dat = new Date();
//          document.getElementById('result').textContent = dat.toLocaleTimeString();
//       }, 1000);
      
//       document.getElementById('btn').addEventListener('click', function() {
//          window.clearInterval(timer);
//       }, false);
// }, false);

function hoge () {
   console.log('あいうえお');
   setTimeout(function() {
      console.log('かきくけこ');
   }, 0);
   console.log('さしすせそ');
}

hoge();