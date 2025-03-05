//evento click alert
const boton = document.querySelector("#boton");

boton.addEventListener("click",()=>{
    alert("el mensaje fue enviado");
    
});


const botonr = document.querySelector("#botonrobot");

botonr.addEventListener("click",()=>{

const titulo ="Usted no es un robot"
    const tituloDOM = document.querySelector("#robot")
    tituloDOM.innerText = titulo
 
});
