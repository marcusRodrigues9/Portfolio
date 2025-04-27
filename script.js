const iconMenu = document.getElementById("icon-menu")
const modal = document.getElementById("modal")
// Abrir modal
iconMenu.addEventListener("click", function(){
    modal.style.display = "flex"
})

modal.addEventListener("click", function(event){
    if(event.target === modal){
        modal.style.display = "none"
    }
})