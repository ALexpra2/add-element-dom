 // Aquí tu código
const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");


boton.addEventListener("click", function(){
    const datos=prompt("Introduce un elemento para la lista")
    const elementList = document.createElement ("li");
    elementList.textContent = datos;
    lista.appendChild(elementList);    
})

