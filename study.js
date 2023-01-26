document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('message', function(e) {
        var origin = 'study.html';
        if(e.origin !== origin) { return; }
        document.getElementById('result').textContent = e.data;
        
        var current = new Date();
        e.source.postMessage(current, origin);
    }, false);
}, false);