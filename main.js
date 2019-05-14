let div1 = document.getElementById("div1")
window.addEventListener("scroll", function(){
console.log(window.scrollY)
if(window.scrollY > 0) {
div1.classList.remove("hidden")
div1.classList.add("show")
}
})
