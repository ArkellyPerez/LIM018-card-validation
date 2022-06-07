const validator = {
// FUNCION PARA VALIDAR EL NUMERO DE LA TARJETA
isValid:(creditCardNumber)=>{
  let CardNumber=[...creditCardNumber].reverse();// convierte en array iniciando del final al inicio


  let arrayPares = CardNumber.filter((num, index) => index % 2 !=0);  // crea un array con solo los numeros pares
  let arrayImpares = CardNumber.filter((num, index) => index % 2 ==0);// crea un array con solo los numeros impares
 
  let sumaNvoValorPar=0;
  let sumaNvoValorImpar=0;
  let flag=true;
// Recorre el array de los pares para realizar la operacion  y la sumatoria de todos los nuevos digitos pares
    for(let i in arrayPares){
        let isNumber=Math.abs(arrayPares[i]); // convierte cada numero de string a entero
        let nvoValorPar=isNumber*2;
            if(nvoValorPar>=10){
              nvoValorPar=nvoValorPar-9;
            } 
           sumaNvoValorPar=sumaNvoValorPar+nvoValorPar;
    }
//Recorre el array de los impares para sumarlos
    for(let i in arrayImpares){
        sumaNvoValorImpar=sumaNvoValorImpar+Math.abs(arrayImpares[i]);// convierte cada numero de string a entero
    }
  
   let sumatotal=sumaNvoValorImpar+sumaNvoValorPar;
   if(sumatotal%10==0)
    {
      flag=true;
    }
    else {
      flag=false;
    }

   return flag;

},
// FUNCION PARA ENCRIPTAR EL NUMERO DE LA TARJETA
maskify:(creditCardNumber)=>{

  let maskCardNumber=[...creditCardNumber];
  let num=maskCardNumber.length;
 
  for(let i=0; i<num-4; i++){
    maskCardNumber[i]="#";
  }
  
  let var1='';
  var1=maskCardNumber.toString();
  return var1.replace(/,/g,"");
  
}

};

export default validator;
