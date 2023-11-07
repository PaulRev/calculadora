

const btnCalcular = document.getElementById('Calcular'); 

const contDividendo = document.getElementById('Dividendo');
const contDivisor = document.getElementById('Divisor');

const mostrarMsj = document.getElementById('contenedorRespuesta');

btnCalcular.addEventListener('click', function(){

    mostrarMsj.classList.toggle('contenedorRespuestaMOVER');


    const resolver = parseInt(contDividendo.value / contDivisor.value);
    const devolverResto = parseFloat(contDividendo.value % contDivisor.value);

    mostrarMsj.innerText=` Cociente es = ${resolver} 
    
    El resto es = ${devolverResto} `;



});
// ::::::::::>