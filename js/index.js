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

