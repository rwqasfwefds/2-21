window.onload = function(){
    let headers = document.querySelectorAll('h1');

    for(let i = 0; i < headers.length; i++){
        let header = headers[i];

        header.style.color = 'orange';
        header.style.background = 'red';
        header.innerHTML = 'From Javascript';
    }
    }
