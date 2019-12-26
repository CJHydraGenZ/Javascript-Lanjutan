const navbar = document.querySelector("nav");
// const a = document.querySelector("nav a");

navbar.addEventListener("mouseenter", () => {
  navbar.classList.add("active");
});

navbar.addEventListener("mouseleave", () => {
  navbar.classList.remove("active");
});

const jumbotron = document.querySelector(".jumbotron");
let img = document.createElement("img");
jumbotron.appendChild(img);
let gambar = ["57793162_p0.jpg", "50099555_p0.jpg"];

const host = window.location.host;
const path = window.location.pathname;
const srypo = window.performance.memory;
const debug = window;
console.log(debug);

// img.src = "img/" + gambar[0];
console.log(gambar);

setInterval(() => {
  for (let i = 0; i < gambar.length; i++) {
    img.src = "img/" + gambar[i];
  }
  // gambar.forEach(g => (img.src = "img/" + g));
}, 500);

const total = document.querySelector(".total");
const used = document.querySelector(".used");
const limit = document.querySelector(".limit");
total.textContent = srypo.totalJSHeapSize;
used.textContent = srypo.usedJSHeapSize;
limit.textContent = srypo.jsHeapSizeLimit;

// console.log(a);
