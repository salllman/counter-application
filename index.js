let countEl = document.getElementById("count");
let savedEn = document.getElementById("saved");
let count = 0;
function increment(){
    count+=1;
    countEl.textContent = count;
}
function save(){
    savedEn.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
}