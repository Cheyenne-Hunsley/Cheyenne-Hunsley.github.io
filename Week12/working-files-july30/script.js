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

// var name1 = "John Doe";
// let name2 = "Sarah Harper";
// const NUM = 13.45678;


// window.alert("Hello There!");
// document.getElementById("demo").innerHTML = "Hello JavaScrip!";
// document.getElementById("demo1").style.color = "red";
// document.getElementById("demo2").src = "images/nature.jpg";

// window.innerWidth();
// window.innerHeight();

// window.screen.availWidth();
// window.screen.availHeight();
// window.screen.colorDepth();
// window.screen.pixelDepth();

// document.getElementById("demo3").textContent = "Hello again!";
// let element = document.getElementsByTagName("p");
// element[0].style.color = "blue";

// let element2 = document.getElementsByClassName("intro");
// element[1].style.fontSize = "45px";

// let element3 = document.querySelectorAll("input[type='text']");
// element3[2].value = "javaScript!";

// let element4 = document.querySelector("img");
// element4.src = "images/sunsent.jpg";

// function myFunction(a, b){

//     return a * b;

// }

// document.getElementById("demo5").onclick = function(){

//     document.getElementById("demo6").innerHTML = "Welcome to JavaScript!";
// }

// const cars = ["Ford", "Toyota", "BMW"];
// cars.push("Jeep");
// cars.pop();
// cars.length;
// cars.shift();
// cars.toString();

// window.onload() = function(){

//     alert("Welcome to my Page!");
// }

// document.getElementById("demo8").addEventListener("click", myFunction);
// document.getElementById("demo8").removeEventListener("click", myFunction);




