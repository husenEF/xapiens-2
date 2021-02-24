console.log("start day 002");
//var
var greeting = "halo dunia";
var isChange = true;
console.log("1:", greeting);
if (isChange) {
  var greeting = "Assalamu'alaikum";
  console.log("g1", greeting);
  //   greeting = "Wa'alaikumussalam";
  console.log("g2:", greeting);
}
console.log("end:", greeting);

//let

function salamText() {
  console.log({ greeting });
  let salam = "hai bro";
  console.log("s4:", salam);
}

let salam = "Hi";
console.log("S1:", salam);

if (isChange) {
  let salam = "Hiiii";
  console.log("S3:", salam);
}

console.log("S-N:", salam);
salamText();

function a() {
  let salam = "ss";

  if (salam == "halo") {
    let salam = "ini saya";
  }

  console.log(salam);
}

function b() {
  let salam = 10;
  greeting = "hola";
  if (salam >= 10) {
    console.log("salam anda " + salam + "x");
  }
  function c() {
    console.log("ini c");
    function d() {
      console.log("ini d");
    }
    d();
  }
  c();
}
console.log("var 7:", greeting);

a();
b();
console.log("var 8:", greeting);
//const
const pembagi = 10;

console.log("p1", pembagi);
if (isChange) {
  const pembagi = 20;
  console.log("p2", pembagi);
}
console.log("p-n", pembagi);
