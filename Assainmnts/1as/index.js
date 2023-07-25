const menuBar= document.getElementById("menu-sec1");
const button = document.getElementById("menu-btn");
 const closeMenu = document.getElementById("menu-clos");
 const toggle_btn = document.getElementById("toggle_btn");
 const starPrice = document.getElementById("start-up");
 const classicPrice = document.getElementById("classic-price");
 const premumPrice = document.getElementById("premium-price");

 button.addEventListener('click', showMenu )

closeMenu.addEventListener('click', hiddenMenu )

toggle_btn.addEventListener('click', toggle_Btn)

function showMenu() {
    menuBar.style.display = 'flex';
}
function hiddenMenu() {
    menuBar.style.display = 'none';
}
function toggle_Btn() {
    toggle_btn.style.marginLeft = '12px'
    toggle_btn.style.marginRight = '12px'
    toggle_btn.classList.toggle("toggle_btn");
    if(toggle_btn.classList.contains("toggle_btn") == true){
        starPrice.innerText = "60$ /year";
    classicPrice.innerText = "120$ /year";
    premumPrice.innerText = "90$ /year";
} else{
    starPrice.innerText = "10$ /mon";
    classicPrice.innerText = "300$ /mon";
    premumPrice.innerText = "49$ /mon";
}
}
