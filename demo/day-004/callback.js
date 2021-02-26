function a(text, j) {
  const total = 2 + 3;
  setTimeout(() => {
    j(total);
  }, 2000);
  console.log({ text });
}

function customlog(variable) {
  console.log("ini text:" + variable);
}

console.log("1");
a("hari ini", customlog);
console.log("3");

function b() {
  const textB = "ini daari data B";
  c(textB, () => {
    const textC = textB + ", data c";
    if (tru) {
      d(textC, () => {
        const textD = textC + ",data d";
      });
    } else {
      e("error", () => {
          
      });
    }
  });
}
