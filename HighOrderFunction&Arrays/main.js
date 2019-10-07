const Perusahaan = [{
    nama: "Cahya",
    katagori: "teknologi",
    start: 2011,
    end: 2015
  },
  {
    nama: "Dyna",
    katagori: "sosiologi",
    start: 2009,
    end: 2014
  },
  {
    nama: "Mamamia",
    katagori: "Koki",
    start: 2010,
    end: 2012
  },
  {
    nama: "Thaie",
    katagori: "Ngegek",
    start: 2012,
    end: 2014
  },
  {
    nama: "ddev",
    katagori: "teknologi",
    start: 2011,
    end: 2019
  },
  {
    nama: "Devc",
    katagori: "teknologi",
    start: 2013,
    end: 2018
  }
];

const umur = [19, 19, 18, 20, 24, 18, 21, 22, 23, 23, 22];

//for
// for (let i = 0; i < Perusahaan.length; i++) {
//   console.log(Perusahaan[i]);
// }

//foreach
// Perusahaan.forEach(function(perusahaan) {
//   console.log(perusahaan.nama);
// });

//fillter
//ambil umur 21 ke atas
// let minum = [];
// for (let i = 0; i < umur.length; i++) {
//   if (umur[i] >= 21) {
//     minum.push(umur[i]);
//   }
// }

// const minum = umur.filter(function(umur) {
//   if (umur >= 21) {
//     return true;
//   }
// });

// const minum = umur.filter(umur => umur >= 21);

// fillter retail perusahaan

// const retailPeruasahaan = Perusahaan.filter(function(perusahaan) {
//   if (perusahaan.katagori === "teknologi") return true;
// });

// const retailPeruasahaan = Perusahaan.filter(
//   perusahaan => perusahaan.katagori === "teknologi"
// );

//ambil umur perudahaan

// const tahun = Perusahaan.filter(
//   perusahaan => perusahaan.start >= 2011 && perusahaan.start < 2019
// );

// const akihirTahun = Perusahaan.filter(perusahaan => (perusahaan.end - perusahaan.start >= 5));

// console.log(akihirTahun);

//map
//Create array

// const namaPerusahaan = Perusahaan.map(function (perusahaan) {
//   return perusahaan.nama;
// })

// const test = Perusahaan.map(function (perusahaan) {
//   return `${perusahaan.nama}[${perusahaan.start} - ${perusahaan.end}]`;
// })

// const test = Perusahaan.map(perusahaan =>
//   `${perusahaan.nama}[${perusahaan.start} - ${perusahaan.end}]`
// )



// // const umurSquare = umur.map(umur => Math.sqrt(umur));
// // const umurSquareKaliDua = umur.map(umur => umur * 2);
// const umurMap = umur
//   .map(umur => Math.sqrt(umur))
//   .map(umur => umur * 2)


// console.log(umurMap);


//sort

// const sortPersahaan = Perusahaan.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// })


// const sortPerusahaan = Perusahaan.sort((a, b) => (a.start > b.start ? 1 : -1))

// console.log(sortPerusahaan);

//sort umur
// const sortUmur = umur.sort((a, b) => a - b);

// console.log(sortUmur);


// let umurSum = 0;
// for (let i = 0; i < umur.length; i++) {
//   umurSum += umur[i]
// }

// const umurSum = umur.reduce(function (total, umur) {
//   return total + umur
// }, 0)

// const umurSum = umur.reduce((total, umur) =>
//   total + umur, 0)

// const totalTahun = Perusahaan.reduce(function (total, perusahaan) {
//   return total + (perusahaan.end - perusahaan.start)
// }, 0)

// const totalTahun = Perusahaan.reduce((total, perusahaan) =>
//   total + (perusahaan.end - perusahaan.start), 0)

// console.log(totalTahun);

//kombinasi Methods

const kombinasi = umur
  .map(umur => umur * 2)
  .filter(umur => umur >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0)

console.log(kombinasi);