import validator from './validator.js';

let number="";

var buttonText=document.getElementById('button_validarr');
buttonText.addEventListener("click",funcion_validar);

function funcion_validar(){
  number = document.querySelector('.num_tarjeta_container').value;
   //alert(number);
  validator.isValid(number);
  if(validator.isValid(number)==true){
  document.querySelector('.rpta_validation').innerHTML="Número de tarjeta correcto";
  }
  else {
    document.querySelector('.rpta_validation').innerHTML="La Tarjeta ingresada no válida";
    }
//alert(number);
 alert( validator.isValid(number));
  //console.log(validator);

   }
   
 