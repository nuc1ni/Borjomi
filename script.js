let navBar =document.getElementById("navBar");
let burgerBar = document.getElementById("burgerBar");

burgerBar.addEventListener('click', function() {
    navBar.classList.toggle("activeNav");
});