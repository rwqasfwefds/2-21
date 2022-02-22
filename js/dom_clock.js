window.onload = function(){
    let clock = document.getElementById('clock');

    setInterval(function(){
        let now = new Date();
        clock.innerHTML = now.toString();
    }, 1000);
}