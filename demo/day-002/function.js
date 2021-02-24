//function declarations

jumlah(1, 3);

function jumlah(num1, num2 = 5) {
  //   return num1 + num2;
  console.log("hasil:", num1 + num2);
}
console.log("====");
jumlah(4);

function person() {
  let num = 6;
  this.age = 10;
  setTimeout(() => {
    this.age++;
    num++;
    console.log("age:", this.age);
    console.log("num:", num);
  }, 3000);

  const hlo = () => {
    console.log("aaggee", this.age);
  };

  hlo();
}

person();

console.log("====expression====");

// halo("haii");
const halo = function (text) {
  console.log("kalimatnya : " + text);
};

halo("hiii");

//array
const greetings = (text) => {
  console.log("arrow function:", text);
  const status = () => console.log("masih pagi");
  status();
};

greetings("Salam");

//rest parameter

const sum = (...num) => num.reduce((item, curren) => item + curren, 0);

const total = sum(1, 2, 3, 4, 5, 6);

console.log({ total });

const person2 = (...data) => {
  //   console.log({ data });
  const name = data[0];
  const company = data[1];
  const jobs = data[2];
  console.log({ name, company, jobs });
};

person2("husen", "refactory", "trainer", "address");
