const colorButton = document.getElementById("ColorButton")

function cambiarColor(){
    const colorAleatorio = "#"+Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor=colorAleatorio
}
colorButton.addEventListener("click", cambiarColor)