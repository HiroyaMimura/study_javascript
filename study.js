document.addEventListener('DOMContentLoaded', function() {
   var target = 'study.html';
   document.getElementById('btn').addEventListener('click', function() {
      document.getElementById('frame').contentWindow.postMessage(
         document.getElementById('message').value, target);
   }, false);
   
}, false);