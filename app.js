let k = +prompt("k sonini kiriting: ");
let n = +prompt("n sonini kiriting: ");

for (let i = 0; i <= n; i++) {
  console.log(i);
}

// 2-masala
let number2 = +prompt("Qancha konfet olmoqchisiz (max-kg:1)");
let price = 12000;

for (i = 0.1; i <= number2; i++) {
  console.log(
    `siz olmoqchi bolgan konfet kgsi ${number2} va uning narxi ${
      number2 * price
    } `
  );
}

// 3-masala
let number3 = +prompt("n sonini kiriting");
let j = 0;

if (number3 > 0) {
  for (let i = number3; i <= 2 * number3; i++) {
    j += i ** 2;
  }
  console.log(` j = ${j}`);
} else {
  console.log("siz kiritgan son 0 dan katta bo'lishi kerak.");
}

// 4- masala

let number4A = +prompt(" butun sonini kiriting:");
let number4B = 0;

if (number4A > 0) {
  for (let i = 1; i <= number4A; i++) {
    number4B += i ** (number4A - i + 1);
  }
  console.log(`Yig'indi  = ${number4B}`);
} else {
  console.log(" soni 0 dan katta bo'lishi kerak.");
}

// 5- masala
let A = +prompt("A butun sonini kiriting");
let B = +prompt("B butun sonini kiriting");

if (A < B) {
  for (let i = A; i <= B; i++) {
    for (let j = 0; j < i; j++) {
      console.log(i);
    }
  }
} else {
  console.log("A soni B sonidan kichik bo'lishi kerak.");
}

// 6-masal
let number = +prompt("Sonni kiriting:");

if (number > 0) {
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}
