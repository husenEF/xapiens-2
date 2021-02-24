const cities = ["Jakarta", "Bandung", "Aceh", "Yogyakarta"];

console.log("A1:", cities);
cities.pop();
console.log("A pop:", cities);
cities.shift();
console.log("A shift:", cities);
cities.unshift("Palembang");
console.log("A unshift", cities);
cities.push("Surabaya");
console.log("A push:", cities);

const arrayFoo = Array.from("Foo");
console.log({ arrayFoo });
arrayFoo[1] = "u";
console.log({ arrayFoo });

console.log("sort :", cities.sort());

console.log("slice 1:", cities.slice(2));

console.log("slice 2:", cities.slice(2, 4));

console.log("slice 3:", cities.slice(1, 4));

console.log("reverse: ", cities.reverse());
