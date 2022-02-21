window.onload = function(){
    let contents = " ";
    contents +="<table border='1'>"
    contents +="<tr><th>번호</th><th>제목</th><th>일자</th></tr>"

    let n = 1;
    while (n <= 3){
       contents += "<tr><td>" + n + "</td><td>안녕하세요</td><td>12-07</td></tr>"
        n++
    }
    contents +="</table>";
    document.getElementById('result').innerHTML = contents;
}
