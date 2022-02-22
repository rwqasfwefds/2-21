window.onload = function(){
    document.body.setAttribute('data-custom', 'value');

    let dataCustom = document.body.getAttribute('data-custom');
    alert(dataCustom);
}