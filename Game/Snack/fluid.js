function Fluit() {
  this.x;
  this.y;

  this.pickLocation = () => {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * coloms - 1) + 1) * scale;
  };

  this.draw = () => {
    ctx.fillStyle = "#000";
    ctx.fillRect(this.x, this.y, scale, scale);
  };
}
