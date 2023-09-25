console.log("page loaded...");

function accept(){
    let acceptUser = document.querySelector(".card-list-item")
    acceptUser.remove()
    let conecctionNumber = document.getElementById("connection-request-number")
    let decreaseNumber = conecctionNumber.innerText;
    decreaseNumber --;
    conecctionNumber.innerText = decreaseNumber;
    let connects = document.getElementById("increaseConnects")
    let connectsNumber = connects.innerText;
    connectsNumber ++;
    connects.innerText = connectsNumber;
}
function reject(){
    let rejectUser = document.querySelector(".card-list-item")
    rejectUser.remove()
    let conecctionNumber = document.getElementById("connection-request-number")
    let decreaseNumber = conecctionNumber.innerText;
    decreaseNumber --;
    conecctionNumber.innerText = decreaseNumber;
}
function editProfile(elemento){
    let userText = document.querySelector("#userName")
    userText.innerText = "Agatha Doyle"
}