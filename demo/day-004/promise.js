let loading = true;

const janji = new Promise((resolve, reject) => {
  //
  let ar = [];
  for (let i = 0; i < 10; i++) {
    ar.push(i);
  }
  return resolve(ar);
  // return reject(new Error("proses gagal"));
});

janji
  .then((result) => {
    // console.log({ result });
    return displayData(result);
  })
  .then((result2) => {
    console.log("isi result 2 : ", result2);
  })
  .catch((error) => {
    console.log({ error });
  })
  .finally(() => {
    console.log("done");
    loading = false;
    console.log("=--------=");
  });

function displayData(data = []) {
  // console.log("isi data", data);
  return `is data: ` + data.join(",");
}
//

const promis1 = new Promise((res, rej) => {
  setTimeout(() => {
    return res("ok, 3detik");
  }, 3000);
});
const promise2 = Promise.resolve("Sukses");
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("detik 5");
    // rej(new Error("error di promise 3"));
  }, 5000);
});

Promise.race([promis1, promise2, promise3])
  .then((values) => {
    console.log("race", { values });
  })
  .catch((error) => {
    console.log("all", { error });
  });
