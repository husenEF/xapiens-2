// const axios = require('axios')

const url = "https://mul14.github.io/data/employees.json";

const data = async () =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((eer) => eer);

async function main() {
  const listHarga = [100, 1300, 1500, 1400];

  const total = listHarga.reduce((prev, current) => {
    return prev + current;
  }, 0);
  const d = await data();
  //   console.log({ d });
  const liveJakarta = d.filter((e) => e.addresses[0].city === "DKI Jakarta");

  const arrowfunction = () => "h";

  const arrowfunctionWithReturn = () => {
    return "oke";
  };

  const allJakarta = d.filter((f) => {
    // let everyThingJakarta = false;
    // console.log({ def: everyThingJakarta });
    //filter 2

    const f2 = f.addresses.filter((g) => g.city === "DKI Jakarta");
    // console.log({ f2 });
    //check status true/false
    // everyThingJakarta = f2.length > 0;
    // console.log({ everyThingJakarta });
    return f2.length > 0;
    // return f.addresses[0].city === "DKI Jakarta" ? f : null;
  });

  console.log({
    allJakarta,
    arrowfunction: arrowfunction(),
    arrowfunctionWithReturn: arrowfunctionWithReturn(),
    total,
  });
}

main();
