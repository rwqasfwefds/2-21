function createNode(){
    let elementNode = document.getElementById('text');
    let newText = document.createTextNode('새로운 텍스트예요!');
    elementNode.appendChild(newText);
}