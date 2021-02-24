let person = {
  name: "Refactory",
  address: "Jalan Palagan",
  jobs: [
    "enginer",
    "trainer",
    "devops",
    {
      job1: "enginer",
      job2: "trainer",
    },
  ],
  jobs2: {
    job1: "enginer",
    job2: "trainer",
  },
  hand: {
    left: "left hand",
    right: "right hand",
  },
};

console.log("object", person);
console.log("get name:", person.name);
person["pakaian"] = "Kaos";
person.aksesoris = ["Topi", "Jam tangan"];
console.log("Obj 1:", person);
console.log("topi:", person.aksesoris[0]);

const n1 = 1;
const n2 = "2";
console.log(n1 + Number(n2));
console.log(n1 + parseInt(n2));

console.log(9 == 9);
console.log(9 === 9);

let a = "4" == 4; //-> true

// sedangkan ini akan bernilai false
let b = "4" === 4; //

console.log({ a, b });

console.log("===penugasan===");

let nilai = 5;
console.log({ nilai });
nilai += 9;

console.log({ nilai });
nilai -= 3;
console.log({ nilai });

console.log("===operator===");
const c = 5;
const d = 10;

console.log(c > 0 && d <= 10 && false);
console.log(c > 0 || d <= 9 || false);
console.log(!(c == 9));
const isOpen = false;
console.log(!isOpen);

// delete

delete person.name;
console.log({ person });
console.log("typeof", typeof person);
//ternary

console.log("ternari", isOpen ? "data open" : "data not open");
console.log("ternari 1", !isOpen ? "data open" : "data not open");

isOpen && console.log("aa");
const h = isOpen ? null : console.log("run  false method");

function z() {
  let num = 14;

  switch (num) {
    case 10:
      return "num nilai 10";
    case 100:
      return "num nilainya 100";
    case 5:
    case 18:
      return "5,18, dan bukan 10/100";
    default:
      return "nilai default";
  }
}
console.log("z:", z());
