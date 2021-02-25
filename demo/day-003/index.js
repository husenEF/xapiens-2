class Car {
  constructor(type, color) {
    console.log("constructo", { type, color });
    this.color = color;
    this.type = type;
    this.isEngineStatus = "off";
  }

  startEngine() {
    console.log("startEngine is on");
    this.isEngineStatus = "on";
  }

  get engineStatus() {
    return `Mesin sedang posisi: ${this.isEngineStatus}`;
  }

  set engineStatus(data = "off") {
    if (data === "") {
      console.log("Silahkan update status kendaraan Anda");
    } else this.isEngineStatus = data;
  }

  yukJalan() {
    this.startEngine();
    console.log("mobil siap jalan");
    return true;
  }

  static isEngineOn(car) {
    console.log("s:", this.type);
    console.log("static method");

    if (car.isEngineStatus == "off") {
      console.log("mobile posisi on");
    } else {
      console.log("Mobil posisi " + car.isEngineStatus);
    }
  }

  static kendaraan(car) {
    console.log(
      `Kendaraan ${car.type}, dengan warna ${car.color}, status Mesin: ${car.engineStatus}`
    );
  }

  static owner(person) {
    console.log("detail pemilik adalah:\r\n");
    console.log(person.Detail);
  }

  static getSettings() {
    //connect db
    return {
      url: "www.domain.com",
      uname: "halo",
      pass: "adauriweiru",
    };
  }
}

class Person {
  constructor(name, alamat) {
    this.name = name;
    this.address = alamat;
    this.car = new Car("Truck", "yellow");
  }

  get Detail() {
    return `Nama: ${this.name}, alamat:${this.address}`;
  }

  set Detail(name) {
    this.name = name;
    // this.address = alamat;
    return "data sudah di update";
  }
}

const husen = new Person("Husen", "Jl Palagan");

const car = new Car("SUV", "black");
car.startEngine();
console.log(car.engineStatus);

console.log("============");

Car.kendaraan(car);
Car.owner(husen);
