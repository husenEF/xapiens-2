const b = () =>
  new Promise((res) => {
    console.log("in B");
    return res("data B");
  });
const c = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log("ini C");
      return res("dari c");
    }, 3000);
  });

const d = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("data D");
      return resolve("dari d");
    }, 2000);
  });

async function a() {
  const dataC = await c();
  const dataB = await b();
  const dataD = await d();
  console.log({ dataB, dataC, dataD });
}

a();

// janji.then(res=>{})
process.env.APP_VER = "1.0.0";
console.log({ env: process.env });
