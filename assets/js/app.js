var stickyDesktop = document.getElementById("desktopStickyContainer");
var stickyResponsive = document.getElementById("responsiveStickyContainer");
var previousContainer = document.getElementById("previousContainer");
var nextContainer = document.getElementById("nextContainer");
var previousContainerA = document.getElementById("previousContainerA");
var nextContainerA = document.getElementById("nextContainerA");

function testScroll(ev){
    if(window.pageYOffset>400){
        stickyResponsive.classList.remove("invisible");
        stickyDesktop.classList.remove("invisible");
        previousContainer.classList.remove("invisible");
        nextContainer.classList.remove("invisible");
        previousContainerA.classList.remove("invisible");
        nextContainerA.classList.remove("invisible");
        
    }else{
        stickyResponsive.classList.add("invisible");
        stickyDesktop.classList.add("invisible");
        previousContainer.classList.add("invisible");
        nextContainer.classList.add("invisible");
        previousContainerA.classList.add("invisible");
        nextContainerA.classList.add("invisible");
    }
}
window.onscroll=testScroll

