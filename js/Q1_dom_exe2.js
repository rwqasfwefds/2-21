// window.onload = function(){
//     let n = prompt('숫자를 입력해주세요');

//     let contents = "";

//     if(n % 2 == 1){
//         for(let x = 1; x <= 6; x++){
//             contents += "<img src='img/image1.png'>";
//         }
//     }
//     else{
//         for(let y = 1; y <= 6; y++){
//             contents += "<img src='img/image2.png'>";
//         }
//     }
//     document.getElementById('result').innerHTML = contents;
// }


window.onload = function(){
    let contents = "";
    
    for(let n = 1; n <= 6; n++){
        if(n % 2 == 1){
            contents += "<img src='img/image1.png'>";
        }
        else{
            contents += "<img src='img/image2.png'>";
        }
    }
    document.getElementById('result').innerHTML = contents;
}

//답지