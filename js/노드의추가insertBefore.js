function appendNode(){
    let parent = document.getElementById('list');
    let criterialtem = document.getElementById('criteria');
    let newitem = document.getElementById('item');
    parent.insertBefore(newitem, criterialtem);
}