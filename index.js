//1.//

if (a > b) {
  console.log("a yra didesnis už b");
} else if (a < b) {
  console.log("b yra didesnis už a");
} else {
  console.log("a ir b yra lygūs");
}

//2.//

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//3.//

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//4.//

for (let i = 1; i <= 5; i++) {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
}

//5.//

let randomNum = 0;
while (randomNum !== 5) {
  randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
}

//6.//

const arrLength = Math.floor(Math.random() * 11) + 20;
const arr = [];

for (let i = 0; i < arrLength; i++) {
  arr.push(Math.floor(Math.random() * 21) + 10);
}

let maxNum = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}

console.log(arr);
console.log("Didžiausia reikšmė: ", maxNum);

//7.//

const Abcd = "ABCD";

const randomAbcd = [...Array(100)].map(
  (_) => Abcd[Math.floor(Math.random() * Abcd.length)]
);

const sumA = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "A" ? sum + 1 : sum),
  0
);

const sumB = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "B" ? sum + 1 : sum),
  0
);

const sumC = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "C" ? sum + 1 : sum),
  0
);

const sumD = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "D" ? sum + 1 : sum),
  0
);

console.log(randomAbcd);
console.log(sumA);
console.log(sumB);
console.log(sumC);
console.log(sumD);

//8.//

function lygineSuma(a, b) {
    if (
      (typeof a === 'number' && typeof b === 'number') ||
      (Array.isArray(a) && Array.isArray(b))
    ) {
      if (typeof a === 'number' && typeof b === 'number') {
        const sum = a + b;
        if (sum % 2 === 1) {
          return 'Suma nelyginė';
        } else {
          return sum;
        }
      }
      if (Array.isArray(a) && Array.isArray(b)) {
        const sum = a.length + b.length;
        if (sum % 2 === 1) {
          return 'Suma nelyginė';
        } else {
          return sum;
        }
      }
    }
    return 'Netinkami kintamieji';
  }

//9.//

function pirminisSkaicius(number) {
    if (typeof number !== 'number') {
      return 'Klaida: Pateikta reikšmė nėra skaičius';
    }
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

//10.//

function telefonoNumeris(numbers) {
    const numberString = numbers.join("");

    const areaCode = numberString.slice(0, 3);
    const telefonoNumeris = numberString.slice(3);

    return `(${areaCode}) ${telefonoNumeris.slice(
        0,
        3
    )}-${telefonoNumeris.slice(3)}`;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formattedNumber = telefonoNumeris(numbers);
console.log(formattedNumber);