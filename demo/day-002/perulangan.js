for (let n = 0; n < 10; n++) {
  console.log({ n });
}

let counter = 1;
let num = 0;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

let awnser;

// do {
//   awnser = prompt("Mau coba lagi?");
//   console.log({ awnser });
// } while (awnser === "y");

const cities = ["Jakarta", "Bandung", "Aceh", "Yogyakarta"];
const upp = [];
const fil = [];
cities.forEach((city) => {
  console.log({ city });
  upp.push(city.toUpperCase());
  if (city !== "Bandung") fil.push(city);
});

function renderCity(city) {
  console.log("city2 :", city);
}

cities.forEach(renderCity);

const uppercase = cities.map((city) => city.toUpperCase());
console.log({ uppercase, upp });

const filter = cities.filter((city) => city !== "Bandung");
console.log({ filter, fil });

const array1 = [1, 2, 3, 4];

const total = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  30
);

console.log({ total });

const abc = cities.map((item, index, array) => {
  //   console.log({ array });
  const text = `${index}.${item}-${array[index]}`;
  return text;
});
console.log({ abc });

const person = {
  name: "refactory",
  jobs: "trainer",
};

for (const key in person) {
  console.log({ key, value: person[key] });
}

const arrayKey = Object.keys(person);
const def = arrayKey.map((k) => {
  return `${k} - ${person[k]}`;
});
console.log({ arrayKey, def });

//assign object

const target = {
  a: 5,
  b: 6,
};

const source = {
  b: 3,
  c: 10,
};

const newObject = Object.assign(source, { f: 60 });
const returnTarget = Object.assign(target, source);
console.log({ target, source, returnTarget, newObject });

const entries = Object.entries(newObject);
console.log({ entries });

console.log("===continue===");

for (let index = 0; index < cities.length; index++) {
  const element = cities[index];
  if (element === "Bandung") continue;
  console.log({ element });
}

for (let index = 0; index < cities.length; index++) {
  const e = cities[index];
  if (e === "Aceh") break;
  console.log({ e });
}

for (let h = 0; h <= 600; h++) {
  if (h <= 500) continue;
  console.log({ h });
}
