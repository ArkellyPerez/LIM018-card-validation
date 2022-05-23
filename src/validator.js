const validator = {

isValid:(card_number)=>{
  let CardNumber=[...card_number].reverse();
 // let numero1=Math.abs(CardNumber);

let arrayPares = CardNumber.filter((num, index) => index % 2 !=0);
let arrayImpares = CardNumber.filter((num, index) => index % 2 ==0);
 // alert(arrayPares);
  //alert(CardNumber);
 let sumaNvoValorPar=0;
 let sumaNvoValorImpar=0;
 let flag=true;
  for(let i in arrayPares){

    let isNumber=Math.abs(arrayPares[i]);
    let nvoValorPar=isNumber*2;
    if(nvoValorPar>=10){
      nvoValorPar=nvoValorPar-9;
    }
    sumaNvoValorPar=sumaNvoValorPar+nvoValorPar;
  }

  //alert( "el valor par es: "+sumaNvoValorPar);


  for(let i in arrayImpares){
    sumaNvoValorImpar=sumaNvoValorImpar+Math.abs(arrayImpares[i]);
  }
  //alert( "el valor impar es: "+sumaNvoValorImpar);

  let sumatotal=sumaNvoValorImpar+sumaNvoValorPar;
   if(sumatotal%10==0)
    {
      flag=true;
    }
    else {
      flag=false;
    }

   // alert( "el valor total  es: "+sumatotal);



return flag;

}
};

export default validator;
