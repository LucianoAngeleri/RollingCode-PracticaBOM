let contador = 1;
//setTimeout - ejecuta una función pasado X tiempo en ms.

function mensajeTimeout(){
    document.write("<p>Esta es una prueba de setTimeout</p>")
}
function mensajeInteval(){
    document.write("<p>Esta es una prueba de setInterval</p>")
    document.write(`<p>Veces ejecutado ${contador}</p>`)
    //Lógica para detener el setInterval
    if (contador === 6) {
        clearInterval(idInterval)
    }
    contador ++;
}
// window.setTimeout(mensajeTimeout,3000)
// setTimeout(mensajeTimeout,4000)
// setTimeout(() => {
//     document.write("<p>Esta es una prueba de setTimeout</p>")
// }, 1000);

//setInterval - ejecuta una función cada X tiempo en ms.
const idInterval = setInterval(mensajeInteval,2000)



// setInterval(() => {
//     document.write("<p>Esta es una prueba de setInterval</p>")

// },200)
