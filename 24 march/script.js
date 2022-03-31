let title = document.querySelector('.title')
let text = document.querySelector('.text')
let mid =document.querySelector('#mid')

let btn = document.querySelector('.content');

btn.addEventListener('click',colorChangeFunc)

function colorChangeFunc() {
    btn.style.background='red'
}

let btn = document.querySelector('.sample');

btn.addEventListener('click',colorChangeFunc)