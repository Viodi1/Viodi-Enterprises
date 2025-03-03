var btn = document.querySelector ('.btn');
    var menu = document.querySelector ('.menu');
btn.addeventListner ('click', function() {
    menu.classList.toggle ('active');
});
var navlink= document.querySelector ('ul li a');
for (var i = 0; i < navlink.length; i++) {
    navlink [i]. addEventListner('click', function() {
        menu.classList.remove ('active')
    })
}