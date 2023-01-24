document.addEventListener('DOMContentLoaded', function() {
   var elem = document.getElementById('elem');
   
   elem.addEventListener('mouseover', function() {
     this.style.backgroundColor = 'yellow';
   }, false);
   
   elem.addEventListener('mouseout', function() {
     this.style.backgroundColor = '';
   }, false);
  }, false);