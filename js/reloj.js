function obtenerFechaHora() {
    let fechaActual = new Date();
   
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");
    
    const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const monthsOfYear = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    //Jueves X de Abril del X
    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${
      monthsOfYear[fechaActual.getMonth()]
    } del ${fechaActual.getFullYear()}`;
    let horaActual = fechaActual.getHours(),
      minutosActuales = fechaActual.getMinutes(),
      segundosActuales = fechaActual.getSeconds();
    
    if (segundosActuales < 10) {
      segundosActuales = 0 + `${segundosActuales}`;
    }
    if (minutosActuales < 10) {
      minutosActuales = 0 + `${minutosActuales}`;
    }
    if (horaActual < 10) {
      horaActual = 0 + `${horaActual}`;
    }
    hora.innerHTML = `${horaActual}:${minutosActuales}:${segundosActuales}`;
}
function cambiarEstilo(colorTexto){
    let section = document.getElementById("contenedorPrincipal");
    section.className = "py-4 fs-1 " + colorTexto
}

let btnBlue = document.getElementById("btnBlue")
let btnRed = document.getElementById("btnRed")
let btnGray = document.getElementById("btnGray")

btnBlue.addEventListener("click",()=>cambiarEstilo("text-blue"))
btnRed.addEventListener("click",()=>cambiarEstilo("text-red"))
btnGray.addEventListener("click",()=>cambiarEstilo("text-gray"))

setInterval(obtenerFechaHora,1000)