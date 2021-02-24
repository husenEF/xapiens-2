console.log("====string====");

const firstName = "Refactoy";
const lastName = ".id";

// join string 1
let full_name = firstName + " N " + lastName;
console.log("join 1 :", full_name);
full_name = `${firstName} & ${lastName}`;
console.log("join 2 :", full_name);

function a() {
  return "iwan";
}

const aa = `hai ${a()}`;
console.log("aa : ", aa);

console.log("to upper:", full_name.toUpperCase());
console.log("to lower:", full_name.toLowerCase());

const spacetext = "   Halo Dunia   ";
console.log("Trim:", spacetext.trim());
console.log("TrimStart:", spacetext.trimStart());
console.log("TrimEnd:", spacetext.trimEnd());
console.log("repeat:", spacetext.repeat(4));

//null

let umur = null;
console.log({ umur });
umur = 20;
console.log({ umur });
umur = "dua puluh";
console.log({ umur });
