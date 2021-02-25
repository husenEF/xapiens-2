class Ongkir {
  //   pajak = 5000;
  #pajak = 500;
  _name = "Asus";

  constructor(berat = 1) {
    this.biaya = 1000;
    this.weight = berat;
    // this.pajak = 500;
    this._name = "Hp";
  }

  getOngkir() {
    return this.weight * this.biaya;
  }

  getTotalBiaya() {
    this.#detail();

    return this.getOngkir() + this.#pajak;
  }

  #detail() {
    console.log("ini private method detail()");
  }

  getName() {
    console.log(`name: ${this._name}`);
  }

  setPajak(tax = 0) {
    this.#pajak = tax;
  }

  greeting() {
    return "hai...";
  }
}

const leptop = new Ongkir(5);
console.log("total ongkir:", leptop.getTotalBiaya());

console.log("====inheritance====");

class JNE extends Ongkir {
  #pajak = 800;

  constructor(berat = 1) {
    super(berat);
    super.biaya = 1500;
  }

  getTotalBiaya() {
    const ongkir = this.getOngkir();
    // console.log({ ongkir });
    return ongkir + this.#pajak;
  }
  greeting() {
    this._name = "hp g40";
    console.log("name:" + this._name);
    return "halo..selamat pagi";
  }

  #cekOngkir() {
    //cek ongkir ke tujuannya
  }
  #payOrder() {
    //perhitungan pajak
    // generate va - bank
  }

  langsungBayar() {
    this.#cekOngkir();
    this.#payOrder();

    return totalbayar;
  }
}

const pc = new JNE(10);
const totalPc = pc.getTotalBiaya();
console.log("berat pc:" + totalPc);
