//July 25
var num1 = 25;   //var can be re-defined, 
let num2 =20;    //let can not be re-defined, block scoped, can be reassigned
const num3 = 15; //const can not be re-defined, block scoped, 
//declaring a variable = hosting


document.write('Hello!~')
console.log("Testing")
window.alert('Happy Friday!')

document.getElementById("demo").innerHTML = "Hello Javascript";
document.getElementById("demo2").style.backgroundColor = "lightblue";

function validateForm(){
    //storing the value of fname from myForm in firstName variable
    let firstName = document.forms["myForm"]["fName"].value;
    let lastName = document.forms["myForm"]["lName"].value;

    if(firstName == ""){
        alert("First Name must be filled out.")
        return false
    }
    else if (lastName == ""){
        alert("Last Name must be filled out")
        return false
    }
    else {
        alert("Thank you for your input")
        return true;
    }
}

//July 30

var name = "John Doe"
let name2 = 'Sarah Harper'
const NUM = 13.456789

window.alert('Hello There!')
document.getElementById('demo').innerHTML = 'Hello Javascript' //innerHTML means the elements of the ID
document.getElementById('demo2').style.color = 'lightblue'
document.getElementById('demo2').src = "images/image.jpeg"

window.innerWidth(); //the total size of the window
window.innerHeight();

window.screen.availWidth; //the visible viewport- the visible part of the page (width value)
window.screen.availHeight;
window.screen.colorDepth;  //the resolution of the screen
window.screen.pixelDepth    //the pixel per inch amount

document.getElementById('demo3').textContent = "Hello Again JavaScript"
let element = document.getElementsByTagName('p');
element[0].style.color = "purple"   //0 refers to the first instance of p

let element2 = document.getElementsByClassName('index')
element2[1].style.fontSize = '45px';

let element3 = document.querySelectorAll('input[type="text"]'); //all inputs with text
element3[3].value = 'javascript';

let element4 = document.querySelector('img')  //first instance of img
element4.src = 'images/image.jpeg'

function myFunction(a, b) {
    return a*b
}


//Anonymous Function 
document.getElementById('demo5').onclick = function() {
    document.getElementById('demo6').innerHTML = 'welcome to Javascript'
}

const cars = ['Ford', 'Toyota', 'Kia']
cars.push('Jeep');
cars.pop();

window.onload() = function(){
    alert("welcome to my Page!")
}

document.getElementById('demo8').addEventListener('click', myFunction);
document.getElementById('demo8').removeEventListener('click', myFunction);
