import validator from './validator.js';

let number="";

var buttonText=document.getElementById('button_validarr');
buttonText.addEventListener("click",funcion_validar);

function funcion_validar(){
         number = document.querySelector('.num_tarjeta_container').value;
          if(number==''){
            document.querySelector('.rpta_validation').innerHTML="Por favor ingresar los datos ";
          }
          else{
              validator.isValid(number);
 
              if(validator.isValid(number)==true){
                  document.querySelector('.rpta_validation').innerHTML="Pago Realizado. Gracias por su compra!";
              }
             else {
                  document.querySelector('.rpta_validation').innerHTML="Por favor ingresar un numero de tarjeta válida";  
             }
             let str2=validator.maskify(number);
             document.querySelector('.num_tarjeta_container').value=str2;
          }  
      }
     
      let CheckboxCompra=document.getElementById('button_comprar');
    CheckboxCompra.addEventListener('click',funtion_addCompra);
    let montoCompra =0;
    let name2=0

     function funtion_addCompra(){
   
     for(let i=0; i<document.form.p1.length; i++){
   
        if(document.form.p1[i].checked){
        
                montoCompra = document.form.p1[i].value;
            
               name2=parseInt(montoCompra,10)+name2;
             
         }
     } 
  
    document.getElementById("MontoPagar").innerHTML="El monto total a pagar es: "+ name2+".00 Soles";   
 }
