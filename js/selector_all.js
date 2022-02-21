window.onload = function (){
    let selecteditem = document.querySelectorAll('li.odd');

    for (let i = 0; i < selecteditem.length; i++){
    
        selecteditem.item(i).style.color="red";
    // selecteditem[i].style.color='red;
}
}