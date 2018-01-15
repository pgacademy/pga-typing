class LoadingScene extends Scene {

  constructor() {
    super();
    this.bar = new LoadingBar();
    this.add(this.bar);
  }

  onStart() {
    this.game.assets.loadAll().then(() => {
      alert('OK');
    });
  }

  renderBackground(context) {
    super.renderBackground(context);
    context.fillStyle = "#000";
    context.fillRect(0, 0, this.game.width, this.game.height);
  }

}