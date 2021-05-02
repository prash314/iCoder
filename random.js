let a = prompt("Enter Maximum Limit!");
function myFunction() {
    var x = document.getElementById("demo")
    x.innerHTML = Math.floor((Math.random() * a) + 1);
}
setInterval(myFunction, 1000)