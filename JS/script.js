const seEntero = document.getElementById("seEntero");
const bloqueOtroTema = document.getElementById("bloqueOtroTema");



seEntero.addEventListener("change", function(){
    if(seEntero.value === "3"){
        bloqueOtroTema.classList.remove("escondido");
    } else {
        bloqueOtroTema.classList.add("escondido");
    }
});
alert("Mensaje enviado")