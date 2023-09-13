//text-change
function textChange(){
    document.getElementById('h2').innerHTML="hello world";
}


//show date
function showDate(){
    document.getElementById('dh2').innerHTML="date()";
}
//bulb on/off
function bulbOn(){
document.getElementById('img').src="imges/on.jpg";

}
function bulbOff(){
    document.getElementById('img').src="imges/off.jpg";


}
//font change
function fontChange(){
    document.getElementById('f_h2').style.fontSize="50px";
}

//show/hide
function show(){
    document.getElementById('c_h2').style.display=" block";
}
function hide(){
     document.getElementById('c_h2').style.display="none";
}

//dwrite
function writeOutput(){
    document.write('Hello world');
}

//WAlert
function walert(){
    window.alert('Hello world');
}
//clog
function clog(){
    console.log("Hello Bangladesh");
}

//variable
var number1=20
var number2=30
var data=number1+number2

function vOutput(){
    document.getElementById('v_h2').innerHTML=data;
}


document.write('new date()')
