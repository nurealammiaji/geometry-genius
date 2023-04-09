// Home
document.getElementById('home-btn').addEventListener('click', function(){
    window.location.href = "index.html";
})

var randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log(randomColor);