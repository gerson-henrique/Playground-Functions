// Desafio 1

function compareTrue(a, b) {
  if (a == true && b == true) {
    return true
  } else {
    return false
  }
}


// Desafio 2
function calcArea(base, height) {

  return ((base*height)/2)

}

// Desafio 3
function splitSentence(stringA) {

return stringA.split(" ");
  
}

// Desafio 4
function concatName(arrB) {
 
 let stringB = "";

for( i= arrB.length-1; i>=0; i-- ) {
 
if( i == arrB.length-1 ){
  stringB = arrB[i];
}else if (i== 0){
  stringB = stringB + ", " + arrB[i];
}
}
return stringB;
}


// Desafio 5
function footballPoints(wins,ties) {

  return ((wins*3)+(ties*1)) 
}

// Desafio 6
function highestCount(arrC) {
let highest = 0;
let times = 0;

for( let variable of arrC ) {

if (highest > variable){

   highest = variable;
 }
}


for( let variable of arrC ){

if (highest < variable){
   highest = variable;
 }
}

 for( let variable of arrC ){
 if (highest == variable){
   times++;
 }
}

 return times;

}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
