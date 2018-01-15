class Actor {

  constructor(x, y, hitArea = null, tags = []) {
    this.x = x;
    this.y = y;
    this.hitArea = hitArea;
    this.tags = tags;
    this.listeners = [];
    this.tick = 0;
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

  contains(x, y) {
    if (!this.hitArea) {
      return false;
    }
    return x > this.x + this.hitArea.x && 
      x < this.x + this.hitArea.x + this.hitArea.w &&
      y > this.y + this.hitArea.y && 
      y < this.y + this.hitArea.y + this.hitArea.h;
  }

  isHit(other) {
    if (!this.hitArea || !other.hitArea) {
      return false;
    }
    return this.x + this.hitArea.x < other.x + other.hitArea.x + other.hitArea.w &&
      other.x + other.hitArea.x < this.x + this.hitArea.x + this.hitArea.w &&
      this.y + this.hitArea.y < other.y + other.hitArea.y + other.hitArea.h &&
      other.y + other.hitArea.y < this.y + this.hitArea.y + this.hitArea.h;
  }

  onClick(game, x, y) {
  }

  update(game, input) {
  }

  render(game, context) {    
  }
}

class Assets {

  constructor() {
    this.count = 0;
    this.loadedCount = 0;
    this.promises = [];
    this.image = {};
    this.audio = {};
    this.listeners = [];
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

  addImage(name, url) {
    const img = new Image();
    img.src = url;
    const promise = new Promise((resolve, reject) => {
      img.addEventListener("load", e => {
        this.image[name] = img;
        this.loadedCount++;
        this.dispatchEvent('loading', this.getLoadingProgress());
        resolve(img);
      });
    });
    this.promises.push(promise);
    this.count++;
  }

  addAudio(name, url, num = 1) {
    const pool = [];
    for (let i = 0; i < num; i++) {
      const audio = new Audio(url);
      const promise = new Promise((resolve, reject) => {
        audio.addEventListener("canplaythrough", e => {
          this.loadedCount++;
          this.dispatchEvent('loading', this.getLoadingProgress());
          resolve(audio);
        });
      });
      pool.push(audio);
      this.promises.push(promise);
      this.count++;
    }
    this.audio[name] = new AudioAsset(pool);
  }

  loadAudios() {
    Object.values(this.audio).forEach(audio => audio.load());
  }

  loadAll() {
    return Promise.all(this.promises);
  }

  getLoadingProgress() {
    return this.loadedCount / this.count;
  }

}
class AudioAsset {

  constructor(pool) {
    this.pool = pool;
  }

  load() {
    this.pool.forEach(audio => audio.load());
  }

  play(volume = 1.0, loop = false) {
    const audio = this.pool.find(audio => audio.ended || audio.currentTime === 0);
    if (audio) {
      audio.volume = volume;
      audio.loop = loop;
      audio.play();
      return audio;
    }
  }

  playEndless(volume = 1.0) {
    return this.play(volume, true);
  }
}

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

class GameEvent {
  constructor(target) {
    this.target = target;
  }
}

class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}
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
