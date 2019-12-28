const canvas = document.querySelector(".cv");
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const coloms = canvas.width / scale;

var snake;

(function setup() {
  snake = new Snake();
  fluit = new Fluit();

  fluit.pickLocation();

  snake.draw();
  function jalan() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fluit.draw();
    snake.draw();
    snake.update();

    if (snake.eat(fluit)) {
      //   console.log("Eating");
      fluit.pickLocation();
    }
  }
  window.setInterval(jalan, 100);
})();

window.addEventListener("keydown", e => {
  const dir = e.key.replace("Arrow", "");
  //   console.log(dir);
  snake.changeDir(dir);
});
