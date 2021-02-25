//set loading = true

try {
  //pengecekkan & pengolahan data
  // gak ada error

  for (let j = 0; j < 20; j++) {
    // if (j == 18) throw new Error("ada masalah di prosesnya");
    console.log({ j });
  }

  /*
  proses insert

  */
  const insert = new Db().insert();
  if (!insert) {
    throw new Error("Insert Data gagal");
  }

  console.log("sukses");
} catch (error) {
  //untuk exception handling
  //error
  console.log({ error, m: error.message });
} finally {
  console.log("final");
  //setloading =false
  //block akan tereksekusi apapun hasilnya
}

// if(insert){
//     //sukses
//     //set loading false
// }else{
//     return "error message"

// }