//js intro
//keyboard variable assign
//let, var,const
//let, var
//let a=10;
//var a=10;
//const a=10;

//document= object
//javascript event hadling language
//document=queryselector
//document=queryselectorall
//console.log("hello")
//console.log('file running')
let submitVar = document.querySelector(".submit");
submitVar.style.height ="50px"

//eventHandling-------> eventlisteners
function submitFunc() {
    alert('you clicked the button')
}
submitVar.addEventListener('click',submitFunc)