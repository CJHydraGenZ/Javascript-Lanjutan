export class Aritmatika {
  constructor(name, nilai) {
    this.name = name;
    this.nilai = nilai;
  }
  tambah(nilai1, nilai2) {
    this.nilai = nilai1 + nilai2;
    return `Hallo ${this.name} Nilai Pertambahan Anda = ${this.nilai}`;
  }
}
// let arit = new Aritmatika("Cahya", 0);

console.log("ok");
