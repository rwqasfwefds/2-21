window.onload = function(){
    let elements = document.querySelectorAll('ul li');
    //'쿼리 셀렉터 올'을 하면 항상 배열이 들어온다고 생각하셈

    for(let i = 0; i < elements.length; i++){
        document.getElementById('output').innerHTML += elements[i].innerHTML;
        document.getElementById('output').innerHTML += "<br>";
    }
}