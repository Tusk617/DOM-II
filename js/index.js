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

let introBackground = document.querySelector('.intro h2');

introBackground.addEventListener('dblclick', function(event) {
    event.target.style.backgroundImage = 'linear-gradient(-90deg, red, yellow)';
})