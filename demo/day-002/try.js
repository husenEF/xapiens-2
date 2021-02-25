const kelompok1 = [];
const kelompok2 = [];
const kelompok3 = [];
const kelompok4 = [];
const kelompok5 = [];
const kelompok6 = [];
const kelompok7 = [];
const kelompok8 = [];
const kelompok9 = [];
const kelompok10 = [];

const mainArray = [[], [], [], [], [], [], [], [], [], []];

const randomData = (jumlah) => {
  for (let i = 1; i <= jumlah; i++) {
    let data_random = Math.floor(Math.random() * 100);
    if (data_random <= 10) {
      kelompok1.push(data_random);
      mainArray[0].push(data_random);
    } else if (data_random > 10 && data_random <= 20) {
      kelompok2.push(data_random);
      mainArray[1].push(data_random);
    } else if (data_random > 20 && data_random <= 30) {
      kelompok3.push(data_random);
      mainArray[2].push(data_random);
    } else if (data_random > 30 && data_random <= 40) {
      kelompok4.push(data_random);
      mainArray[3].push(data_random);
    } else if (data_random > 40 && data_random <= 50) {
      kelompok5.push(data_random);
      mainArray[4].push(data_random);
    } else if (data_random > 50 && data_random <= 60) {
      kelompok6.push(data_random);
      mainArray[5].push(data_random);
    } else if (data_random > 60 && data_random <= 70) {
      kelompok7.push(data_random);
      mainArray[6].push(data_random);
    } else if (data_random > 70 && data_random <= 80) {
      kelompok8.push(data_random);
      mainArray[7].push(data_random);
    } else if (data_random > 80 && data_random <= 90) {
      kelompok9.push(data_random);
      mainArray[8].push(data_random);
    } else {
      kelompok10.push(data_random);
      mainArray[9].push(data_random);
    }
  }


  const nilaiMax = (data) => {
    return Math.max(...data);
  };
  const getMaxValue = (name, data) => {
    const maxNum = Math.max(...data);
    console.log(`${name} : ${maxNum}`);
  };
  //rata-rata
  const mean = (data = []) => {
    let jumlah = 0;
    for (let i = 0; i < data.length; i++) {
      jumlah += data[i];
    }
    return jumlah / data.length;
  };

  //   console.log({ mainArray });
  //   return null;
  const sortingASC = (data) => {
    return data.sort();
  };

  const displayKelompok = (name = "kelompok :", data) => {
    console.log(`${name} ${data}`);
  };

  const sorting = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  };


  mainArray.forEach((element, i) => {
    displayKelompok(`Kelompok ${i}`, element);
    console.log("\n");

    getMaxValue(`Max Kelompok ${i}`, element);
    console.log("\n");

    console.log(`Rata-rata kelompok ${i} : ${mean(element)}`);
    console.log("\n");
    console.log(`Sorting kelompok ${i} : ${sorting(element)}`);
  });
  
};
randomData(1000);
