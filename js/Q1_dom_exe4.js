// window.onload = function(){
//     let contents = " ";
//     contents +="<table border='1'>";
//     contents +="<tr><th>2단</th></tr>";

//     let y = " ";
//     let x = 2;
//     let n = 1;
//     while (n <= 9){

//         y = x*n;

//        contents += "<tr><td> 2 x  " + n + "  = " + y + "</td></tr>";
//         n++;
//     }
//     contents +="</table>";
//     document.getElementById('result').innerHTML = contents;
// }


window.onload = function (){

    let contents = "";
    contents +="<h3>구구단 표</h3>";
    contents +="<table>";
    contents +="<tr><th>2단</th><th>3단</th><th>4단</th><th>5단</th>";
    contents +="<th>6단</th><th>7단</th><th>8단</th><th>9단</th></tr>";
    
    for(let j = 1; j <= 9; j++){
        contents += "<tr>";
        for(let i = 2; i <= 9; i++){
            contents += "<td>" + i + "x" + j + "=" + (i*j) + "</td>";
        }
        contents += "</tr>";
    }
        contents += "</table>"
        document.getElementById("result").innerHTML = contents;
}

        //버튼 이벤트가 있으면 함수만 적으면 되고 버튼이 없으면,
        //윈도우.온로드 적어야 됨