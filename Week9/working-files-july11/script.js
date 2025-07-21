function myMove(){

    let id = null;
    let elem = document.getElementById("animated");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame(){

        if (pos == 450){

            clearInterval(id);
        }
        else {

            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}