// window.onload = function(){
//     function result(){
//         let n = prompt('숫자를 입력하세요.');


// if(n % 2 !=0){
//     document.getElementById('image').src = "img/image1.png";
// }
// else{
//     document.getElementById('image').src = "img/image2.png";
// }
//     }
//     result()
// }

// 내가 한 거(html body에 이미지를 넣어서 div태그 안에 들어간게 아니라,
// 이미지에 있는 src속성에 맞춰서 이미지 태그에 들어간거임,
// 문제 자체가 div태그 안에 넣으라는거 였으니깐 틀린 문제임)

window.onload = function(){
    let n = Number(prompt('숫자를 입력해주세요'));

    let contents = "";

    if(n % 2 == 1){
        contents = "<img src='img/image1.png'>";
    }
    else{
        contents = "<img src='img/image2.png'>";
    }
    document.getElementById('result').innerHTML = contents;
}
// 답지