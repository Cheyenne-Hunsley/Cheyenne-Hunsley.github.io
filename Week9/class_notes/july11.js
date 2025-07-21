function myMove() {
    let id = null;
    let elem = document.getElementById("animated")
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5)  //5 is 5 miliseconds 
    if (pos == 450) {
        clearInterval(id);
    }
    else {
        pos++ 
        
    }
}