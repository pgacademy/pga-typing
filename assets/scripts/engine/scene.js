class Scene {

  constructor() {
    this.actors = [];
    this.destroyedActors = [];
    this.listeners = [];
  }

  add(actor) {
    this.actors.push(actor);
    actor.addEventListener("spawnactor", e => this.add(e.target));
    actor.addEventListener("destory", e => this.destroyedActors.push(e.target));
  }

  remove(actor) {
    const index = this.actors.indexOf(actor);
    this.actors.splice(index, 1);
  }

  update(input) {

    this.actors.forEach(actor => actor.update(this.game, input));
    
    this.hitTest();
    
    const context = this.game.context;

    context.save();
    this.renderBackground(context);
    context.restore();
    
    this.actors.forEach(actor => {
      context.save();
      actor.render(this.game, context)
      context.restore();
    });

    this.actors.forEach(actor => actor.tick++);
  }

  hitTest() {
    const len = this.actors.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        const a1 = this.actor[i];
        const a2 = this.actor[j];
        if (a1.isHit(a2)) {
          a1.dispatchEvent("hit", new GameEvent(a2));
          a2.dispatchEvent("hit", new GameEvent(a1));
        }
      }
    }
  }

  renderBackground(context) {
    context.clearRect(0, 0, this.game.width, this.game.height);
  }

  onClick(x, y) {
    this.actors.filter(actor => actor.contains(x, y)).
      forEach(actor => actor.onClick(this.game, x, y));
  }

  onStart() {
  }

  addEventListener(type, listener) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(listener);
  }

  dispatchEvent(type, e) {
    const listeners = this.listeners[type] || [];
    listeners.forEach(listener => listener(e));
  }
}
