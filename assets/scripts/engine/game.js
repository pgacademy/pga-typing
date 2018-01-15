class Game {

  constructor(title, width, height, fps) {

    this.title = title;
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.tick = 0;

    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.assets = new Assets();
  }

  changeScene(scene) {
    this.currentScene = scene;
    this.currentScene.game = this;
    this.currentScene.onStart(this);
  }

  randomInt(n) {
    return Math.floor(Math.random() * n);
  }

  getTicksForMillis(millis) {
    return Math.floor(this.fps * millis / 1000);
  }

  start() {

    const frameTime = 1 / this.fps;
    let prevTimestamp = 0;

    const input = {};
    addEventListener("keydown", e => input[e.key] = true);
    addEventListener("keyup", e => input[e.key] = false);

    this.canvas.addEventListener("click", e => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left - 1;
      const y = e.clientY - rect.top - 1;
      this.currentScene.onClick(x, y);
    });

    const loop = (timestamp) => {

      const elapsed = (timestamp - prevTimestamp) / 1000;
      if (elapsed <= frameTime) {
        requestAnimationFrame(loop);
        return;
      }
      prevTimestamp = timestamp;

      this.currentScene.update(input);

      this.tick++;
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  }

}
