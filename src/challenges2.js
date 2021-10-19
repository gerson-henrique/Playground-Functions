const { splitSentence } = require("./challenges");

// Desafio 10
function techList(tech,name) {
let i =0 
arrObjts = [];

if (tech.length>0) {
tech.sort();

for(i=0;i < tech.length; i ++ ){
arrObjts.push({tech: tech[i], name})

}
return arrObjts;

} else {
  return "Vazio!"
}
}


// Desafio 11
function generatePhoneNumber(arrNumber) {
let chech3times = []; 
let flag=0;
let finalNumber = '';





 
  if (arrNumber.length != 11 ){
    return "Array com tamanho incorreto.";
  }

//"não é possível gerar um número de telefone com esses valores"

  chech3times = arrNumber.slice();

  chech3times.sort();
  

  for (let i=0 ; i<=10;i++  ) {
  
    if (chech3times[i]==chech3times[i+1]) {
      flag++
    }  else {
      flag=0;
    }


     
    
    if (flag >= 2) {
      
    return  "não é possível gerar um número de telefone com esses valores"
  } 


}  
  


  for (let variableB of arrNumber) {
    if  (variableB > 9 || variableB < 0 ) {
      return "não é possível gerar um número de telefone com esses valores"
    }
}

arrNumber.unshift('(')
arrNumber.splice(3,0,')')
arrNumber.splice(4,0,' ')
arrNumber.splice(10,0,'-')





for(let key of arrNumber){
  finalNumber = finalNumber + key

}

return finalNumber

}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
