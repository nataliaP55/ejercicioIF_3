let primerNumero = "numero uno";
let segundoNumero = "numero dos";
let tercerNumero = "numero tres";

function verificacion() {
    primerNumero = document.querySelector('#primerNumero').value;
    segundoNumero = document.querySelector('#segundoNumero').value;
    tercerNumero = document.querySelector('#tercerNumero').value;


    if (primerNumero == segundoNumero && tercerNumero == primerNumero) {
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Ganador!! </h1> 
        `;

    } else if (primerNumero == segundoNumero || tercerNumero == primerNumero || tercerNumero == segundoNumero) {
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Felicitaciones! Ud. salió en segundo lugar! </h1> 
        `;

    } else {
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Sonría, Ud ha ganado un helado gratis </h1> 
        `;
    }
}