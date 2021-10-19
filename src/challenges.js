// Desafio 1

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(stringA) {
  return stringA.split(' ');
}

// Desafio 4
function concatName(arrB) {
  let stringB = '';

  for (let i = arrB.length - 1; i >= 0; i -= 1) {
    if (i === arrB.length - 1) {
      stringB = arrB[i];
    } else if (i === 0) {
      stringB = `${stringB}, ${arrB[i]}`;
    }
  }
  return stringB;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(arrC) {
  let highest = arrC[0];
  let times = 0;


  for (let variable of arrC) {
    if (highest < variable) {
      highest = variable;
    }
  }

  for (let variable of arrC) {
    if (highest == variable) {
      times++;
    }
  }

  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrD) {
  let arrFizzBuzz = [];

  for (let id in arrD) {
    if (arrD[id] % 3 === 0 && arrD[id] % 5 == 0) {
      arrFizzBuzz[id] = 'fizzBuzz';
    } else if (arrD[id] % 3 === 0) {
      arrFizzBuzz[id] = 'fizz';
    } else if (arrD[id] % 5 === 0) {
      arrFizzBuzz[id] = 'buzz';
    } else {
      arrFizzBuzz[id] = 'bug!';
    }
  }
  return arrFizzBuzz;
}

// Desafio 9
function encode(simpleWord) {
  let arrWord = [];
  let arrCode = [];
  let codeWord = '';
  arrWord = simpleWord.split('');

  for (index in arrWord) {
    switch (arrWord[index]) {
    case 'a':
      arrCode[index] = 1;
      break;
    case 'e':
      arrCode[index] = 2;
      break;
    case 'i':
      arrCode[index] = 3;
      break;
    case 'o':
      arrCode[index] = 4;
      break;
    case 'u':
      arrCode[index] = 5;
      break;

    default:
      arrCode[index] = arrWord[index];

      break;
    }
  }

  for (index in arrCode) {
    codeWord += arrCode[index];
  }
  return codeWord;
}

function decode(codedWord) {
  let arrWord = [];
  let arrCode = [];
  let codeWord = '';
  arrWord = codedWord.split('');

  for (index in arrWord) {
    switch (arrWord[index]) {
    case '1':
      arrCode[index] = 'a';
      break;
    case '2':
      arrCode[index] = 'e';
      break;
    case '3':
      arrCode[index] = 'i';
      break;
    case '4':
      arrCode[index] = 'o';
      break;
    case '5':
      arrCode[index] = 'u';
      break;

    default:
      arrCode[index] = arrWord[index];

      break;
    }
  }

  for (index in arrCode) {
    codeWord += arrCode[index];
  }
  return codeWord;
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
