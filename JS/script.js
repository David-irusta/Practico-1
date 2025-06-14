const seEntero = document.getElementById("seEntero");
const bloqueOtroTema = document.getElementById("bloqueOtroTema");
const formulario = document.getElementById("formulario")
const boton = document.getElementById("boton")


seEntero.addEventListener("change", function(event){
    if(seEntero.value === "3"){
        bloqueOtroTema.classList.remove("escondido");
    } else {
        bloqueOtroTema.classList.add("escondido");
    }
});

boton.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Mensaje enviado");
    formulario.reset();
});

/*seEntero.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensaje enviado");
    formulario.reset();
});*/
