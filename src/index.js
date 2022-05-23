//import validator from './validator.js';

//console.log(validator);

var buttonText=document.getElementById('button_validarr');
buttonText.addEventListener("click",funcion_validar);

//var numCantainer=document.getElementById('num_cantainer');
//numCantainer.addEventListener("keydown",funcion_copiar);


//const openModal = document.querySelector('.button_validar');
//openModal.addEventListener('click', (e) => {
  //  e.preventDefault();
    //let name=document.querySelector('.num_tarjeta_container').value;
    //document.querySelector('.rpta_validation').innerHTML = `tAJENTA ${name}`
    //alert(name);
  
 // })


function funcion_validar(){
  let number = document.querySelector('.num_tarjeta_container').value;
  
  alert(number);
   }