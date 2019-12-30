let startPer = performance.now();

const navbar = document.querySelector("nav");
// const a = document.querySelector("nav a");
const headerA = document.querySelectorAll("nav a");
// console.log(...headerA);

navbar.addEventListener("mouseenter", () => {
  navbar.classList.add("active");
});

const clearInt = document.querySelector("button");

navbar.addEventListener("mouseleave", () => {
  navbar.classList.remove("active");
});

headerA.forEach(a =>
  a.addEventListener("click", e => {
    e.preventDefault();
    // console.log(e.target.textContent);

    document.title = e.target.textContent;
  })
);

const jumbotron = document.querySelector(".jumbotron");
let img = document.createElement("img");
jumbotron.appendChild(img);
// let gambar = [
//   "57793162_p0",
//   "50099555_p0",
//   "FSF",
//   "hddh",
//   "project 324342",
//   "TY",
//   "Untitled-1-Recovered",
//   "wqeqwe1",
//   "XV"
// ];

let data = [];

async function get() {
  let res = await fetch("img.json")
    .then(res => res.json())
    .catch(err => console.error(err));
  // console.log(res);

  data.push(...res);
  // couser(res);
}
get();

const host = window.location.host;
const path = window.location.pathname;
const srypo = window.performance.memory;
const debug = window;
// console.log(debug);

// img.src = "img/" + gambar[0];
// console.log(gambar);
function couser() {
  // console.log(data);

  let randomNilai = Math.floor(Math.random() * data.length);
  const isActive = false;

  let next = Math.floor(Math.random() * data.length);
  // console.log(randomNilai, "next", next);

  if (randomNilai <= next || (randomNilai === next && randomNilai >= next)) {
    // img.style.opacity = `${opacity}`;
    img.style.opacity = "1";
    isActive == true;
  } else {
    img.style.opacity = "0";
    isActive == false;
  }
  // img.style.opacity = "" + randomNilai + "";

  // console.log(randomNilai);
  // data.forEach(d => console.log(d));
  img.src = `img/${data[randomNilai]}.jpg`;
  // for (let i = 0; i < gambar.length; i++) {
  //   console.log(gambar[randomNilai]);
  // }
}
const intr = setInterval(couser, 1500);

// const total = document.querySelector(".total");
// const used = document.querySelector(".used");
// const limit = document.querySelector(".limit");
// total.textContent = srypo.totalJSHeapSize;
// used.textContent = srypo.usedJSHeapSize;
// limit.textContent = srypo.jsHeapSizeLimit;

// console.log(a);
const pAbout = document.querySelector(".about p");
window.addEventListener("scroll", e => {
  // console.log(e.currentTarget.scrollY);
  let Y = Math.floor(e.currentTarget.scrollY / 2);
  console.log("y,Y", Y);
  // let count = -100;
  Y >= 250
    ? (pAbout.style.left = `0%`)
    : // if (count === 0) {
      //   pAbout.style.left = `${count}`;

      // }
      (pAbout.style.left = "-100%");
});

let endPer = performance.now();

console.log(`${endPer - startPer} kecepatan Program/milidetik`);
