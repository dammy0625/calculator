function calc() {
var a = parseInt(document.querySelector("#value1").value)
var b = parseInt(document.querySelector("#value2").value)
var sel = document.querySelector("#sel").value
var result;

if( sel == "add"){
result = a + b
}else if( sel == "minus"){
    result = a - b
}else if( sel == "mul"){
    result = a * b
}else if( sel == "div"){
    result = a / b
}else{
    alert("please select")
}
document.querySelector("#resul").innerHTML=result
}
var h = document.querySelector("#him")
h.addEventListener("click",hamb)

function hamb(){
var g = document.querySelector("#si")
g.classList.toggle("sikl")

var n = document.querySelector("form")
n.style.transition = "1s"

if(g.classList.contains("sikl")){
    n.style.filter = "blur(20px)"
    n.style.pointerEvents = "none"

}else{
    n.style.filter = "blur(0px)"
    n.style.pointerEvents = ""
}
}

function blck(){

    var r = document.body.style.cssText = "background: linear-gradient(rgba(120, 120, 0, 0.938),rgb(10, 77, 107));"
}
function blu(){
    document.body.style.cssText = "background: linear-gradient(rgba(170, 130, 90, 0.938),rgb(10, 77, 97))"
    document.querySelector("p").style.color = 'rgba(0,0,0,0.4)'

}
function norm(){
    document.body.style.cssText = "background: linear-gradient(rgba(120, 4, 0, 0.938),rgb(10, 77, 107))"
}