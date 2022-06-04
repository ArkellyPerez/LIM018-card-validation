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
     
      let CheckboxCompra=document.getElementById('button_comprar');
    CheckboxCompra.addEventListener('click',funtion_addCompra);
    let montoCompra =0;
    let name2=0;
     // let ValorCompra=0;let ValorCompra=0;
          
      // let ValorCompra=0;let ValorCompra=0;
 function funtion_addCompra(){
   // alert("hol5");
    for(let i=0; i<document.form.p1.length; i++){
   //  console.log(i);
        if(document.form.p1[i].checked){
         //  alert("if");
                montoCompra = document.form.p1[i].value;
              //  alert("if2");
               name2=parseInt(montoCompra,10)+name2;
              // alert(name2);
         }
    } 
   // alert(name2);
    document.getElementById("MontoPagar").innerHTML="El monto total a pagar es: "+ name2+".00 Soles";   
 }

   //console.log("holiii");
     // let ValorCompra=0;
    //
 

 // let buttonCompra=document.getElementById('button_comprar');
   //   buttonCompra.addEventListener("click",funtion_comprar);
  