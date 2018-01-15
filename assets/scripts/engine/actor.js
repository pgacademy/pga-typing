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
