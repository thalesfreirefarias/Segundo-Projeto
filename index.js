// escreva uma função que usa 2 números e retorna o maior entre eles

let numero1 = 5
let numero2 = 5

if (numero1 == numero2){
  console.log("Números iguais!");
}

else {
  
let valorMaior = max(numero1,numero2);
console.log(valorMaior);

function  max(numero1,numero2){
  if(numero1>numero2)
   return numero1;
  return numero2;
}
}


