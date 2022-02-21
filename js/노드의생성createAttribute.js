function createNode(){
    let text = document.getElementById("text");
    let newAttribute = document.createAttribute("style");
    newAttribute.value = "color:red";
    text.setAttributeNode(newAttribute);
}