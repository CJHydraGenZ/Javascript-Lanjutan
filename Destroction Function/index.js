// const nama = ["cahya", "dyna"];

// const [cahya, dyna] = nama;

// const mhs = {
//   nim: 170030390,
//   nama: "igd cahya ari wibawa",
//   kelas: "ac173",
//   makananFavorit: ["sarden", "mie", "sate"]
// };

// function tampil({ nim, nama, kelas, makananFavorit: [sarden, mie, sate] }) {
//   return `Hallo Nama saya ${nama} saya kelas ${kelas} dan nim saya ${nim} makanan favorit saya
//             adalah ${sate} dan ${sarden}`;
// }

// console.log(tampil(mhs));

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const hasil = document.querySelector(".hasil");

const btn = document.querySelector(".btn");
const tambah = document.querySelector("#tambah");
const kurang = document.querySelector("#kurang");
const kali = document.querySelector("#kali");
const bagi = document.querySelector("#bagi");
console.log(tambah, kurang, kali, bagi);

// var checkBox = document.getElementById("myCheck");
// var text = document.getElementById("text");
// function myFunction() {
//   if (checkBox.checked == true) {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }

btn.addEventListener("click", () => {
  let a = parseInt(input1.value);
  let b = parseInt(input2.value);
  if (isNaN(a) || isNaN(b)) {
    alert("anda harus masukan angka");
  }

  hasil.textContent = penjumlahan(a, b);

//   console.log(penjumlahan(a, b));
});

function penjumlahan(a, b) {
  if (tambah.checked == true) {
    return parseInt(a) + parseInt(b);
  } else {
    return null;
  }
  if (kurang.checked == true) {
    return parseInt(a) - parseInt(b);
  } else {
    return null;
  }
  if (kali.checked == true) {
    return parseInt(a) * parseInt(b);
  } else {
    return null;
  }
  if (bagi.checked == true) {
    return parseInt(a) / parseInt(b);
  } else {
    return null;
  }

 

  //   return {
  //     kurang: parseInt(a) - parseInt(b),
  //     kali: parseInt(a) * parseInt(b),
  //     bagi: parseInt(a) / parseInt(b)
  //   };
}

// const { tambah, kurang, kali, bagi } = penjumlahan();
