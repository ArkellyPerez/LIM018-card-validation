import validator from './validator.js';

let number="";

var buttonText=document.getElementById('button_validarr');
buttonText.addEventListener("click",funcion_validar);

function funcion_validar(){
         number = document.querySelector('.num_tarjeta_container').value;
          if(number==''){
            document.querySelector('.rpta_validation').innerHTML="Por favor ingresar la informacion ";
          }
          else{
              validator.isValid(number);
 
              if(validator.isValid(number)==true){
                  document.querySelector('.rpta_validation').innerHTML="Datos correctos";
              }
             else {
                  document.querySelector('.rpta_validation').innerHTML="La Tarjeta ingresada no es válida";  
             }
             let str2=validator.maskify(number);
             document.querySelector('.num_tarjeta_container').value=str2;
          }  
      }
 