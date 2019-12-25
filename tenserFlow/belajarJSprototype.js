// Prototype function dekralasi

// function olahraga(energi, name) {
//     // let mahasiswa = Object.create()

//     this.energi = energi;
//     this.name = name;
// }

// olahraga.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama},selamat makan`;
// }

// olahraga.prototype.main = (jam) => {
//     this.energi -= jam;
//     return `Hallo ${this.nama}, selamat bermain`
// }

// olahraga.prototype.tidur = (jam) => {
//     this.energi += jam * 2;

//     return `hallo ${this.nama},selamat tidur`;
// }

// let cahya = new olahraga(20, "cahya");

// classs

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Hllo ${this.nama},Selamat makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `Hllo ${this.nama},Selamat bermain`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Hllo ${this.nama},Selamat Tidur`;
  }
}

let cahya = new Mahasiswa("cahya", 10);

let angka = [5, 2, 3];
console.log(cahya);
