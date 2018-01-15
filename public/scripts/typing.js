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
window.addEventListener('load', () => {

  const game = new Game("Typing", 640, 480, 60);
  game.assets.addImage('bg001', '/images/bg/pipo-battlebg001.jpg');
  game.assets.addImage('bg002', '/images/bg/pipo-battlebg002.jpg');
  game.assets.addImage('bg003', '/images/bg/pipo-battlebg003.jpg');
  game.assets.addImage('bg004', '/images/bg/pipo-battlebg004.jpg');
  game.assets.addImage('bg005', '/images/bg/pipo-battlebg005.jpg');
  game.assets.addImage('bg006', '/images/bg/pipo-battlebg006.jpg');
  game.assets.addImage('bg007', '/images/bg/pipo-battlebg007.jpg');
  game.assets.addImage('bg008', '/images/bg/pipo-battlebg008.jpg');
  game.assets.addImage('bg009', '/images/bg/pipo-battlebg009.jpg');
  game.assets.addImage('bg010', '/images/bg/pipo-battlebg010.jpg');
  game.assets.addImage('bg011', '/images/bg/pipo-battlebg011.jpg');
  game.assets.addImage('bg012', '/images/bg/pipo-battlebg012.jpg');
  game.assets.addImage('bg013', '/images/bg/pipo-battlebg013.jpg');
  game.assets.addImage('bg014', '/images/bg/pipo-battlebg014.jpg');
  game.assets.addImage('bg015', '/images/bg/pipo-battlebg015.jpg');
  game.assets.addImage('bg016', '/images/bg/pipo-battlebg016.jpg');
  game.assets.addImage('bg017', '/images/bg/pipo-battlebg017.jpg');
  game.assets.addImage('bg018', '/images/bg/pipo-battlebg018.jpg');
  game.assets.addImage('bg019', '/images/bg/pipo-battlebg019.jpg');
  game.assets.addImage('bg020', '/images/bg/pipo-battlebg020.jpg');
  game.assets.addImage('boss001', '/images/enemy/pipo-boss001.png');
  game.assets.addImage('boss002', '/images/enemy/pipo-boss002.png');
  game.assets.addImage('boss003', '/images/enemy/pipo-boss003.png');
  game.assets.addImage('boss004', '/images/enemy/pipo-boss004.png');
  game.assets.addImage('enemy001', '/images/enemy/pipo-enemy001.png');
  game.assets.addImage('enemy001a', '/images/enemy/pipo-enemy001a.png');
  game.assets.addImage('enemy001b', '/images/enemy/pipo-enemy001b.png');
  game.assets.addImage('enemy002', '/images/enemy/pipo-enemy002.png');
  game.assets.addImage('enemy002a', '/images/enemy/pipo-enemy002a.png');
  game.assets.addImage('enemy002b', '/images/enemy/pipo-enemy002b.png');
  game.assets.addImage('enemy003', '/images/enemy/pipo-enemy003.png');
  game.assets.addImage('enemy003a', '/images/enemy/pipo-enemy003a.png');
  game.assets.addImage('enemy003b', '/images/enemy/pipo-enemy003b.png');
  game.assets.addImage('enemy004', '/images/enemy/pipo-enemy004.png');
  game.assets.addImage('enemy004a', '/images/enemy/pipo-enemy004a.png');
  game.assets.addImage('enemy004b', '/images/enemy/pipo-enemy004b.png');
  game.assets.addImage('enemy005', '/images/enemy/pipo-enemy005.png');
  game.assets.addImage('enemy005a', '/images/enemy/pipo-enemy005a.png');
  game.assets.addImage('enemy005b', '/images/enemy/pipo-enemy005b.png');
  game.assets.addImage('enemy006', '/images/enemy/pipo-enemy006.png');
  game.assets.addImage('enemy006a', '/images/enemy/pipo-enemy006a.png');
  game.assets.addImage('enemy006b', '/images/enemy/pipo-enemy006b.png');
  game.assets.addImage('enemy007', '/images/enemy/pipo-enemy007.png');
  game.assets.addImage('enemy007a', '/images/enemy/pipo-enemy007a.png');
  game.assets.addImage('enemy007b', '/images/enemy/pipo-enemy007b.png');
  game.assets.addImage('enemy008', '/images/enemy/pipo-enemy008.png');
  game.assets.addImage('enemy008a', '/images/enemy/pipo-enemy008a.png');
  game.assets.addImage('enemy008b', '/images/enemy/pipo-enemy008b.png');
  game.assets.addImage('enemy009', '/images/enemy/pipo-enemy009.png');
  game.assets.addImage('enemy009a', '/images/enemy/pipo-enemy009a.png');
  game.assets.addImage('enemy009b', '/images/enemy/pipo-enemy009b.png');
  game.assets.addImage('enemy010', '/images/enemy/pipo-enemy010.png');
  game.assets.addImage('enemy010a', '/images/enemy/pipo-enemy010a.png');
  game.assets.addImage('enemy010b', '/images/enemy/pipo-enemy010b.png');
  game.assets.addImage('enemy011', '/images/enemy/pipo-enemy011.png');
  game.assets.addImage('enemy011a', '/images/enemy/pipo-enemy011a.png');
  game.assets.addImage('enemy011b', '/images/enemy/pipo-enemy011b.png');
  game.assets.addImage('enemy012', '/images/enemy/pipo-enemy012.png');
  game.assets.addImage('enemy012a', '/images/enemy/pipo-enemy012a.png');
  game.assets.addImage('enemy012b', '/images/enemy/pipo-enemy012b.png');
  game.assets.addImage('enemy013', '/images/enemy/pipo-enemy013.png');
  game.assets.addImage('enemy013a', '/images/enemy/pipo-enemy013a.png');
  game.assets.addImage('enemy013b', '/images/enemy/pipo-enemy013b.png');
  game.assets.addImage('enemy014', '/images/enemy/pipo-enemy014.png');
  game.assets.addImage('enemy014a', '/images/enemy/pipo-enemy014a.png');
  game.assets.addImage('enemy014b', '/images/enemy/pipo-enemy014b.png');
  game.assets.addImage('enemy015', '/images/enemy/pipo-enemy015.png');
  game.assets.addImage('enemy015a', '/images/enemy/pipo-enemy015a.png');
  game.assets.addImage('enemy015b', '/images/enemy/pipo-enemy015b.png');
  game.assets.addImage('enemy016', '/images/enemy/pipo-enemy016.png');
  game.assets.addImage('enemy016a', '/images/enemy/pipo-enemy016a.png');
  game.assets.addImage('enemy016b', '/images/enemy/pipo-enemy016b.png');
  game.assets.addImage('enemy017', '/images/enemy/pipo-enemy017.png');
  game.assets.addImage('enemy017a', '/images/enemy/pipo-enemy017a.png');
  game.assets.addImage('enemy017b', '/images/enemy/pipo-enemy017b.png');
  game.assets.addImage('enemy018', '/images/enemy/pipo-enemy018.png');
  game.assets.addImage('enemy018a', '/images/enemy/pipo-enemy018a.png');
  game.assets.addImage('enemy018b', '/images/enemy/pipo-enemy018b.png');
  game.assets.addImage('enemy019', '/images/enemy/pipo-enemy019.png');
  game.assets.addImage('enemy019a', '/images/enemy/pipo-enemy019a.png');
  game.assets.addImage('enemy019b', '/images/enemy/pipo-enemy019b.png');
  game.assets.addImage('enemy020', '/images/enemy/pipo-enemy020.png');
  game.assets.addImage('enemy020a', '/images/enemy/pipo-enemy020a.png');
  game.assets.addImage('enemy020b', '/images/enemy/pipo-enemy020b.png');
  game.assets.addImage('enemy021', '/images/enemy/pipo-enemy021.png');
  game.assets.addImage('enemy021a', '/images/enemy/pipo-enemy021a.png');
  game.assets.addImage('enemy021b', '/images/enemy/pipo-enemy021b.png');
  game.assets.addImage('enemy022', '/images/enemy/pipo-enemy022.png');
  game.assets.addImage('enemy022a', '/images/enemy/pipo-enemy022a.png');
  game.assets.addImage('enemy022b', '/images/enemy/pipo-enemy022b.png');
  game.assets.addImage('enemy023', '/images/enemy/pipo-enemy023.png');
  game.assets.addImage('enemy023a', '/images/enemy/pipo-enemy023a.png');
  game.assets.addImage('enemy023b', '/images/enemy/pipo-enemy023b.png');
  game.assets.addImage('enemy024', '/images/enemy/pipo-enemy024.png');
  game.assets.addImage('enemy024a', '/images/enemy/pipo-enemy024a.png');
  game.assets.addImage('enemy024b', '/images/enemy/pipo-enemy024b.png');
  game.assets.addImage('enemy025', '/images/enemy/pipo-enemy025.png');
  game.assets.addImage('enemy025a', '/images/enemy/pipo-enemy025a.png');
  game.assets.addImage('enemy025b', '/images/enemy/pipo-enemy025b.png');
  game.assets.addImage('enemy026', '/images/enemy/pipo-enemy026.png');
  game.assets.addImage('enemy026a', '/images/enemy/pipo-enemy026a.png');
  game.assets.addImage('enemy026b', '/images/enemy/pipo-enemy026b.png');
  game.assets.addImage('enemy027', '/images/enemy/pipo-enemy027.png');
  game.assets.addImage('enemy027a', '/images/enemy/pipo-enemy027a.png');
  game.assets.addImage('enemy027b', '/images/enemy/pipo-enemy027b.png');
  game.assets.addImage('enemy028', '/images/enemy/pipo-enemy028.png');
  game.assets.addImage('enemy028a', '/images/enemy/pipo-enemy028a.png');
  game.assets.addImage('enemy028b', '/images/enemy/pipo-enemy028b.png');
  game.assets.addImage('enemy029', '/images/enemy/pipo-enemy029.png');
  game.assets.addImage('enemy029a', '/images/enemy/pipo-enemy029a.png');
  game.assets.addImage('enemy029b', '/images/enemy/pipo-enemy029b.png');
  game.assets.addImage('enemy030', '/images/enemy/pipo-enemy030.png');
  game.assets.addImage('enemy030a', '/images/enemy/pipo-enemy030a.png');
  game.assets.addImage('enemy030b', '/images/enemy/pipo-enemy030b.png');
  game.assets.addImage('enemy031', '/images/enemy/pipo-enemy031.png');
  game.assets.addImage('enemy031a', '/images/enemy/pipo-enemy031a.png');
  game.assets.addImage('enemy031b', '/images/enemy/pipo-enemy031b.png');
  game.assets.addImage('enemy032', '/images/enemy/pipo-enemy032.png');
  game.assets.addImage('enemy032a', '/images/enemy/pipo-enemy032a.png');
  game.assets.addImage('enemy032b', '/images/enemy/pipo-enemy032b.png');
  game.assets.addImage('enemy033', '/images/enemy/pipo-enemy033.png');
  game.assets.addImage('enemy033a', '/images/enemy/pipo-enemy033a.png');
  game.assets.addImage('enemy033b', '/images/enemy/pipo-enemy033b.png');
  game.assets.addImage('enemy034', '/images/enemy/pipo-enemy034.png');
  game.assets.addImage('enemy034a', '/images/enemy/pipo-enemy034a.png');
  game.assets.addImage('enemy034b', '/images/enemy/pipo-enemy034b.png');
  game.assets.addImage('enemy035', '/images/enemy/pipo-enemy035.png');
  game.assets.addImage('enemy035a', '/images/enemy/pipo-enemy035a.png');
  game.assets.addImage('enemy035b', '/images/enemy/pipo-enemy035b.png');
  game.assets.addImage('enemy036', '/images/enemy/pipo-enemy036.png');
  game.assets.addImage('enemy036a', '/images/enemy/pipo-enemy036a.png');
  game.assets.addImage('enemy036b', '/images/enemy/pipo-enemy036b.png');
  game.assets.addImage('enemy037', '/images/enemy/pipo-enemy037.png');
  game.assets.addImage('enemy037a', '/images/enemy/pipo-enemy037a.png');
  game.assets.addImage('enemy037b', '/images/enemy/pipo-enemy037b.png');
  game.assets.addImage('enemy038', '/images/enemy/pipo-enemy038.png');
  game.assets.addImage('enemy038a', '/images/enemy/pipo-enemy038a.png');
  game.assets.addImage('enemy038b', '/images/enemy/pipo-enemy038b.png');
  game.assets.addImage('enemy039', '/images/enemy/pipo-enemy039.png');
  game.assets.addImage('enemy039a', '/images/enemy/pipo-enemy039a.png');
  game.assets.addImage('enemy039b', '/images/enemy/pipo-enemy039b.png');
  game.assets.addImage('enemy040', '/images/enemy/pipo-enemy040.png');
  game.assets.addImage('enemy040a', '/images/enemy/pipo-enemy040a.png');
  game.assets.addImage('enemy040b', '/images/enemy/pipo-enemy040b.png');

  game.changeScene(new LoadingScene());
  game.start();

});

console.log('title');

class TitleScene extends Scene {

  



}
class TypingScene extends Scene {

  

  



}
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