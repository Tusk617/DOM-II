// Your code goes here

// this code here changes the Fun Bus title to a larger size when you hover over it
let bigTitle = document.querySelector("header h1");

bigTitle.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '7rem';
})

bigTitle.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '4rem';
})

// Big Title ends here

//vroom will change the 'Let's Go!' text to 'VROOM!'
let vroom = document.querySelector(".text-content h2");

vroom.addEventListener('click', function() {
    vroom.textContent = 'VROOM!';
})
//vroom closes here

//introBackground will change the background of the intro header to a gradient
let introBackground = document.querySelector('.intro h2');

introBackground.addEventListener('dblclick', function(event) {
    event.target.style.backgroundImage = 'linear-gradient(-90deg, red, yellow)';
})
//introBackground closes here

// funNav will change the colors of each nav link by selecting it, and pressing R, B, G, and O
let funNav = document.querySelector('nav');

funNav.addEventListener('keydown', function(e) {
    if (e.keyCode == '82') {
        e.target.style.backgroundColor = 'red';
    } else if (e.keyCode == '66') {
        e.target.style.backgroundColor = 'blue';
    } else if (e.keyCode == '71') {
        e.target.style.backgroundColor = 'green';
    } else if (e.keyCode == '79') {
        e.target.style.backgroundColor = 'orange';
    }
})
// funNav closes here

var advImg = document.querySelector('.img-content img');

advImg.addEventListener('mouseenter', function(event) {
    event.target.style.width = '10%';
})

advImg.addEventListener('mouseleave', function(event) {
    event.target.style.width = '100%'
})

let downMoused = document.querySelector('.text-content p');

downMoused.addEventListener('mousedown', function(event) {
    event.target.style.backgroundColor = 'red';
})

let movingMouse = document.querySelector('.content-destination h2');

movingMouse.addEventListener('mousemove', function(event) {
    event.target.textContent = 'Final Destination lol'
})

let overMouse = document.querySelector('.destination h4');

overMouse.addEventListener('mouseover', function(event){
    if (event.target.textContent === 'Fun In The Sun'){
        event.target.textContent = 'Suns out, guns out';
    }
})
