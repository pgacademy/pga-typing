class LoadingBar extends Actor {

  constructor() {
    super(0, 0);
  }

  render(game, context) {
    this.x = (game.width - 200) / 2;
    this.y = (game.height - 20) / 2;
    context.lineWidth = 5;
    context.strokeStyle = "#fff";
    context.fillStyle = "#fff";
    context.strokeRect(this.x, this.y, 200, 20);
    context.fillRect(this.x, this.y, 200 * game.assets.getLoadingProgress(), 20);
  }

}